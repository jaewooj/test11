
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
      experimental: {
        appDir: true,
        forceSwcTransforms:true
      },
      distDir: 'build',
    };
    module.exports = nextConfig;