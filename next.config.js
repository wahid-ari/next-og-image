/** @type {import('next').NextConfig} */
const nextConfig = {
  env : {
    API_URL: "http://localhost:3000",
    // API_URL: "",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "http://localhost", "localhost"],
  },
}

module.exports = nextConfig
