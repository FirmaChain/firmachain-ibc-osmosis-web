/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    API_HOST: process.env.API_HOST,
    MEDIUM: process.env.MEDIUM,
  },
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
