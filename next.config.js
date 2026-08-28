/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // `next dev` and `next build` both write to .next and overwrite each other's
  // output. Setting NEXT_DIST_DIR lets a production build run in its own folder
  // while a dev server keeps running, e.g.
  //   NEXT_DIST_DIR=.next-prod npx next build
  distDir: process.env.NEXT_DIST_DIR || ".next",

  experimental: {
    // Nodemailer resolves transports through dynamic require() calls that
    // webpack rewrites when it inlines them into the serverless bundle, which
    // throws at module load in production (works in dev, fails on Vercel).
    // Listing it here keeps it a real runtime require instead.
    serverComponentsExternalPackages: ["nodemailer"],
  },
};

module.exports = nextConfig;
