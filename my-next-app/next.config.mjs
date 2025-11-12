/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**", // allow all images from this host
      },
      {
        protocol: "https",
        hostname: "placecats.com", // optional: your placeholder cat images
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
