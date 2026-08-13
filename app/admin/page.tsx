 "use client";

import { useEffect, useState } from "react";

type Application = { jobTitle: string; name: string; email: string; phone: string; licence: string; experience: string; location: string; submittedAt: string; };

export default function AdminPage() {
  const [apps, setApps] = useState<Application[]>([]);
  useEffect(() => {
    setApps(JSON.parse(localStorage.getItem("brittruck_applications") || "[]"));
  }, []);

  return (
    <section className="section pageTop">
      <div className="container">
        <div className="adminHead"><div><span className="eyebrow">ADMIN</span><h1>Recruitment Dashboard</h1></div><span className="demoBadge">DEMO MODE</span></div>
        <div className="adminStats"><div><strong>{apps.length}</strong><span>Applications</span></div><div><strong>3</strong><span>Open jobs</span></div><div><strong>UK</strong><span>Coverage</span></div></div>
        <div className="tableCard">
          <h2>Recent applications</h2>
          {apps.length === 0 ? <p className="muted">No demo applications yet. Submit one from a job page to see it here.</p> :
          <div className="tableWrap"><table><thead><tr><th>Name</th><th>Job</th><th>Licence</th><th>Experience</th><th>Location</th><th>Email</th></tr></thead><tbody>
            {apps.map((a, i) => <tr key={i}><td>{a.name}</td><td>{a.jobTitle}</td><td>{a.licence}</td><td>{a.experience}</td><td>{a.location}</td><td>{a.email}</td></tr>)}
          </tbody></table></div>}
        </div>
      </div>
    </section>
  );
}