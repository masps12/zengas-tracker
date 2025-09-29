/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "/zengas-tracker",
  assetPrefix: "/zengas-tracker/"
};
module.exports = nextConfig;