/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "live.themewild.com",
      },
    ],
  },
};

export default nextConfig;
