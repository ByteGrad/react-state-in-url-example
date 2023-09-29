/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.vercel.store",
      },
    ],
  },
};

module.exports = nextConfig;
