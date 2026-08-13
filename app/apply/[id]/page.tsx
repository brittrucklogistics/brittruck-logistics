import { notFound } from "next/navigation";
import { getJob, jobs } from "@/lib/jobs";
import ApplicationForm from "@/components/ApplicationForm";

export function generateStaticParams() {
  return jobs.map(job => ({ id: job.id }));
}

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();

  return (
    <section className="section pageTop">
      <div className="container formWrap">
        <div>
          <span className="eyebrow">APPLICATION</span>
          <h1>Apply for {job.title}</h1>
          <p className="lead">{job.location} · {job.pay}</p>
        </div>
        <ApplicationForm job={job} />
      </div>
    </section>
  );
}