export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footerGrid">
        <div>
          <img src="/logo.svg" alt="BritTruck Logistics" className="footerLogo" />
          <p>Professional drivers. Reliable transport.</p>
        </div>
        <div>
          <h4>Drivers</h4>
          <a href="/jobs">View jobs</a>
          <a href="/jobs">Apply now</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="/#about">About us</a>
          <a href="mailto:recruitment@brittrucklogistics.co.uk">Recruitment email</a>
        </div>
      </div>
      <div className="container copyright">© 2026 BritTruck Logistics. All rights reserved.</div>
    </footer>
  );
}