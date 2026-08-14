'use client';
import { useState } from "react";
import type { Job } from "@/lib/jobs";

export default function ApplicationForm({ job }: { job: Job }) {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const application = {
      jobId: job.id,
      jobTitle: job.title,
      submittedAt: new Date().toISOString(),
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      licence: form.get("licence"),
      experience: form.get("experience"),
      location: form.get("location"),
      notes: form.get("notes")
    };
    const existing = JSON.parse(localStorage.getItem("brittruck_applications") || "[]");
    localStorage.setItem("brittruck_applications", JSON.stringify([application, ...existing]));
    setSent(true);
  }

  if (sent) return <div className="success"><div className="successIcon">✓</div><h2>Application received</h2><p>Thank you. Your application has been saved in this demo. For production, connect a secure backend before collecting real candidate data.</p></div>;

  return (
    <form className="applicationForm" onSubmit={submit}>
      <label>Full name *<input name="name" required /></label>
      <label>Email address *<input type="email" name="email" required /></label>
      <label>Phone number *<input name="phone" required /></label>
      <label>Location *<input name="location" placeholder="e.g. Birmingham" required /></label>
      <label>Licence type *
        <select name="licence" required><option value="">Select</option><option>C+E / Class 1</option><option>C / Class 2</option><option>C or C+E</option></select>
      </label>
      <label>HGV experience *
        <select name="experience" required><option value="">Select</option><option>Less than 1 year</option><option>1–2 years</option><option>3–5 years</option><option>5+ years</option></select>
      </label>
      <label>Additional information<textarea name="notes" rows={5} placeholder="Availability, preferred shifts, etc." /></label>
      <button className="btn full" type="submit">Submit Application</button>
      <small>Demo mode: this form saves data only in this browser.</small>
    </form>
  );
}
