/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

module.exports = nextConfig; 