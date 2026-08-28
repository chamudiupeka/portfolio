/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Nodemailer resolves transports through dynamic require() calls that
    // webpack rewrites when it inlines them into the serverless bundle, which
    // throws at module load in production (works in dev, fails on Vercel).
    // Listing it here keeps it a real runtime require instead.
    serverComponentsExternalPackages: ["nodemailer"],
  },
};

module.exports = nextConfig;
