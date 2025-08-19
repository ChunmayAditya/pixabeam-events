# PixaBeam - Events Demo

## What
Simple Next.js app (pages) that lists events from Supabase and lets sample users RSVP (Yes/No/Maybe).

## Setup
1. Clone repo.
2. Create `.env.local` with:
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
3. Run:
   npm install
   npm run dev
4. Open http://localhost:3000

## Database
- `schema.sql` creates tables.
- `seed.sql` inserts sample data.
- Tables: users, events, rsvps

## Notes
- RLS disabled for demo simplicity. For production enable RLS and add auth policies.
