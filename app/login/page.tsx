import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="section pageTop">
      <div className="container narrow">
        <div className="loginCard">
          <span className="eyebrow">PORTAL</span>
          <h1>Driver / Admin Login</h1>
          <p>This starter includes the interface. Connect Supabase Auth before using real accounts.</p>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <label>Password<input type="password" placeholder="••••••••" /></label>
          <Link href="/admin" className="btn full">Open Demo Dashboard</Link>
          <p className="muted">Demo only — no real authentication is active yet.</p>
        </div>
      </div>
    </section>
  );
}