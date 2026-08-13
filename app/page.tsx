import Link from "next/link";
import { jobs } from "@/lib/jobs";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="eyebrow">HGV DRIVERS • HAULAGE • LOGISTICS</span>
            <h1>Drive your career forward <span>with us.</span></h1>
            <p>Join BritTruck Logistics and discover professional HGV driving opportunities with reliable routes, competitive pay and dedicated driver support.</p>
            <div className="actions">
              <Link href="/jobs" className="btn">View Jobs</Link>
              <Link href="/jobs" className="btn outline">Apply Now</Link>
            </div>
          </div>
          <div className="truckCard">
            <div className="roadGlow" />
            <div className="truck">🚛</div>
            <div className="truckCaption">UK-wide HGV opportunities</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container statsGrid">
          <div><strong>500+</strong><span>Drivers placed</span></div>
          <div><strong>100+</strong><span>Active clients</span></div>
          <div><strong>24/7</strong><span>Driver support</span></div>
          <div><strong>UK</strong><span>Wide opportunities</span></div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">WHY BRITTRUCK</span>
              <h2>Professional work. Real opportunities.</h2>
            </div>
            <p>We connect experienced HGV drivers with transport and logistics opportunities across the United Kingdom.</p>
          </div>
          <div className="featureGrid">
            <article><div className="icon">✓</div><h3>Reliable company</h3><p>Professional transport operations and responsive driver support.</p></article>
            <article><div className="icon">£</div><h3>Competitive pay</h3><p>Clear hourly rates and opportunities for overtime on selected contracts.</p></article>
            <article><div className="icon">↗</div><h3>Career growth</h3><p>Build experience and find longer-term opportunities in logistics.</p></article>
          </div>
        </div>
      </section>

      <section className="section jobsSection">
        <div className="container">
          <div className="sectionHead">
            <div><span className="eyebrow">OPEN POSITIONS</span><h2>Current HGV driver jobs</h2></div>
            <Link href="/jobs" className="textLink">View all jobs →</Link>
          </div>
          <div className="jobGrid">
            {jobs.map(job => (
              <article className="jobCard" key={job.id}>
                <span className="tag">{job.licence}</span>
                <h3>{job.title}</h3>
                <p>📍 {job.location}</p>
                <p>💷 {job.pay}</p>
                <p>🕒 {job.type}</p>
                <Link href={`/jobs/${job.id}`} className="btn full">Apply Now</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}