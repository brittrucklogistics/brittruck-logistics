'use client';

import { useState } from "react";
import type { Job } from "@/lib/jobs";
import { supabase } from "@/lib/supabase";

export default function ApplicationForm({ job }: { job: Job }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const { error } = await supabase
      .from("applications")
      .insert({
        full_name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        job_id: String(job.id),
        licence: form.get("licence"),
        experience: form.get("experience"),
        message: form.get("notes"),
        status: "new",
      });

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
          We will review your application and contact you shortly.
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

      <label>
        Licence type *
        <select name="licence" required>
          <option value="">Select</option>
          <option>C+E / Class 1</option>
          <option>C / Class 2</option>
          <option>C or C+E</option>
        </select>
      </label>

      <label>
        HGV experience *
        <select name="experience" required>
          <option value="">Select</option>
          <option>Less than 1 year</option>
          <option>1–2 years</option>
          <option>3–5 years</option>
          <option>5+ years</option>
        </select>
      </label>

      <label>
        Additional information
        <textarea
          name="notes"
          rows={5}
          placeholder="Availability, preferred shifts, etc."
        />
      </label>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      <button
        className="btn full"
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      <small>
        Your application will be securely submitted to BritTruck Logistics.
      </small>
    </form>
  );
}
