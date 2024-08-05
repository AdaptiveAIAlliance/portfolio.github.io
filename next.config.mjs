/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import { config } from "./src/configs/config.mjs";

const nextConfig = {
  basePath: config.isProd ? config.basePath : "",
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["three"],
  images: { unoptimized: true },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// export default nextConfig;
export default withMDX(nextConfig);
