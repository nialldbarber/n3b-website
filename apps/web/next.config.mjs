import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import addMdx from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import withNextIntl from "./intl.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  transpilePackages: ["helpers"],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
};

const withMdx = addMdx({
  options: {
    remarkPlugins: [remarkMdxFrontmatter, remarkFrontmatter],
    rehypePlugins: [rehypeSlug, rehypeHighlight],
  },
  extension: /\.(md|mdx)$/,
});

const combinedConfig = withNextIntl(withMdx(nextConfig));

export default combinedConfig;
