/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/buy", destination: "/", permanent: false },
      { source: "/checkout", destination: "/", permanent: false },
      { source: "/upgrade", destination: "/", permanent: false },
      { source: "/plans", destination: "/", permanent: false },
      { source: "/products", destination: "/", permanent: false },
      { source: "/products/:path*", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
