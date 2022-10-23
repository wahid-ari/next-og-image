/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    // API_URL: "https://next-og-images.vercel.app",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "http://localhost",
      "localhost",
      "https://next-og-images.vercel.app",
      "next-og-images.vercel.app"
    ],
  },
}

module.exports = nextConfig
