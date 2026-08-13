import Link from "next/link";
import { jobs } from "@/lib/jobs";

export default function JobsPage() {
  return (
    <section className="section pageTop">
      <div className="container">
        <span className="eyebrow">CAREERS</span>
        <h1>HGV Driver Jobs in the UK</h1>
        <p className="lead">Find your next driving opportunity with BritTruck Logistics.</p>
        <div className="jobGrid jobsList">
          {jobs.map(job => (
            <article className="jobCard" key={job.id}>
              <span className="tag">{job.licence}</span>
              <h2>{job.title}</h2>
              <p>📍 {job.location}</p>
              <p>💷 {job.pay}</p>
              <p>🕒 {job.type}</p>
              <p>Experience: {job.experience}</p>
              <Link href={`/jobs/${job.id}`} className="btn full">View Job & Apply</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}