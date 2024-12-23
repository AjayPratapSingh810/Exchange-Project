/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*", // Proxy all requests starting with /api
          destination: "https://api.backpack.exchange/api/:path*", // Real API URL
        },
      ];
    },
  };

export default nextConfig;
