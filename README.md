# BritTruck Logistics

A modern UK HGV driver recruitment website built with Next.js and ready for Vercel.

## Included
- Responsive public recruitment website
- HGV job listings
- Job detail pages
- Driver application form
- Local demo application storage in the browser
- Admin dashboard demo
- Professional BritTruck Logistics visual identity
- No database required for the first demo

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project.
3. Import the repository into Vercel.
4. Framework: Next.js (detected automatically).
5. Click Deploy.

## Important for production

The current application form stores demo applications in the applicant's browser using localStorage. Before using it with real candidates, connect a secure database/backend such as Supabase and add proper authentication, document storage, privacy/retention controls, and UK GDPR compliance.

Suggested production stack:
Next.js + Vercel + Supabase (Auth + Postgres + Storage).

The admin demo is intentionally not a real security boundary. Do not use it for real candidate data until authentication and server-side authorization are implemented.
