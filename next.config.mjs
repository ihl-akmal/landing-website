/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/wcl/:path*',
        destination: 'http://202.10.43.96/wcl/:path*',
      },
    ]
  },
}


export default nextConfig
