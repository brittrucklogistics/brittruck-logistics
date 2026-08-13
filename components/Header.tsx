import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="BritTruck Logistics" />
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/login" className="loginBtn">Login</Link>
          <Link href="/jobs" className="btn small">Apply Now</Link>
        </nav>
      </div>
    </header>
  );
}