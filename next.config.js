/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/bf-georgia-report-final' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bf-georgia-report-final/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
