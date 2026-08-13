import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob, jobs } from "@/lib/jobs";

export function generateStaticParams() {
  return jobs.map(job => ({ id: job.id }));
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();

  return (
    <section className="section pageTop">
      <div className="container detailGrid">
        <article className="detail">
          <span className="tag">{job.licence}</span>
          <h1>{job.title}</h1>
          <div className="meta"><span>📍 {job.location}</span><span>💷 {job.pay}</span><span>🕒 {job.type}</span></div>
          <h2>About the role</h2>
          <p>{job.description}</p>
          <h2>Benefits</h2>
          <ul>{job.benefits.map(b => <li key={b}>{b}</li>)}</ul>
          <h2>What we are looking for</h2>
          <p>A valid UK HGV licence, relevant driving experience, a professional attitude and a commitment to safe driving.</p>
          <Link href={`/apply/${job.id}`} className="btn">Apply for this job</Link>
        </article>
        <aside className="applyBox">
          <h3>Ready to apply?</h3>
          <p>Complete the online application in a few minutes.</p>
          <Link href={`/apply/${job.id}`} className="btn full">Start Application</Link>
        </aside>
      </div>
    </section>
  );
}