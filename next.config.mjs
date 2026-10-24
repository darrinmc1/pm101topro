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
      { source: "/buy", destination: "/pricing", permanent: false },
      { source: "/checkout", destination: "/pricing", permanent: false },
      { source: "/upgrade", destination: "/pricing", permanent: false },
      { source: "/plans", destination: "/pricing", permanent: false },
      { source: "/products", destination: "/pricing", permanent: false },
      { source: "/products/:path*", destination: "/pricing", permanent: false },
    ]
  },
}

export default nextConfig
