# Chamudi Upeka Portfolio

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/page.tsx`: assembles the sections in order.
- `app/layout.tsx`: fonts (Space Grotesk / Inter / IBM Plex Mono) and page metadata.
- `components/`: one component per section (Hero, About, Experience, Projects, Skills,
  Certifications, Education, Leadership, Contact).
- `lib/data.ts`: **all editable content lives here**: experience, projects, skills,
  certifications, education, leadership, and contact info. Edit this file to update the site
  without touching any component markup.
- `lib/tags.tsx`: the `active / complete / in progress / planned` status badge used across
  experience, project, and certification cards.
- `public/resume.pdf`: the file the "download resume" button links to. Replace this file
  whenever your resume is updated (keep the filename `resume.pdf`, or update the `href` in
  `components/Hero.tsx`).

## Contact form (Gmail)

The contact form posts to a Next.js Server Action that sends mail through your own
Gmail account with Nodemailer. It needs two environment variables.

1. Turn on 2-Step Verification at https://myaccount.google.com/security
2. Create an App Password for "Mail" at https://myaccount.google.com/apppasswords
3. `cp .env.example .env.local` and paste the 16-character password in
4. Restart `npm run dev`

```
GMAIL_USER=mkcupeka@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

Set the same two variables in your Vercel project settings before deploying, or the
form will fail in production while working fine locally. `.env.local` is gitignored,
so the password never reaches the repo.

Mail arrives from your own address with the sender in `Reply-To`, so replying in Gmail
goes straight back to whoever wrote in. Delivery target defaults to `GMAIL_USER`; set
`CONTACT_TO` to send somewhere else.

## Things to fill in before you deploy

In `lib/data.ts`, under `profile.contact`, replace the placeholder `"#"` links with your real
GitHub and LinkedIn URLs. In `projects`, each project's `link` is also a placeholder, point it
at the real repository once it's public.

## Deploy

The fastest path is [Vercel](https://vercel.com):

1. Push this project to a GitHub repository.
2. Import the repo in Vercel, it auto-detects Next.js, no config needed.
3. Deploy. Every push to `main` redeploys automatically.

## Adding a new project or certification

Open `lib/data.ts` and add a new object to the relevant array (`projects`, `certifications`,
`experience`, etc.). The page picks it up automatically, no component changes needed.
