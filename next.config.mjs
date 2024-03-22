/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "factorydigitale.tech",
        port: "",
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
