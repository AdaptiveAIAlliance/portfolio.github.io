/** @type {import('next').NextConfig} */
export const config = {
  isProd: true,
  basePath: "/portfolio.github.io",
};
const nextConfig = {
  basePath: config.isProd ? config.basePath : "",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
