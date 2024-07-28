/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio.github.io",
  images: {
    loader: "custom",
    loaderFile: "loader/custom-image-loader.js",
  },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
