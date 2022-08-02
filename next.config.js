const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
