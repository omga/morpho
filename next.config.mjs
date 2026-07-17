/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // YouTube poster frames for the lazy video facade
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }]
  }
};

export default nextConfig;
