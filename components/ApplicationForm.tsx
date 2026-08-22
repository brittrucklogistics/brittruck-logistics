"use client";

import { useState } from "react";
import type { Job } from "@/lib/jobs";
import { supabase } from "@/lib/supabase";

export default function ApplicationForm({ job }: { job: Job }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const application = {
      job_id: job.id,
      job_title: job.title,
      name: form.get("name") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      licence: form.get("licence") as string,
      experience: form.get("experience") as string,
      location: form.get("location") as string,
      notes: form.get("notes") as string,
    };

    const { error } = await supabase
      .from("applications")
      .insert([application]);

    setLoading(false);

    if (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="success">
        <div className="successIcon">✓</div>

        <h2>Application received</h2>

        <p>
          Thank you. Your application has been successfully submitted.
          Our team will review your application and contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form className="applicationForm" onSubmit={submit}>
      <label>
        Full name *
        <input name="name" required />
      </label>

      <label>
        Email address *
        <input type="email" name="email" required />
      </label>

      <label>
        Phone number *
        <input name="phone" required />
      </label>

      <label>
        Location *
        <input
          name="location"
          placeholder="e.g. Birmingham"
          required
/>
</label>
