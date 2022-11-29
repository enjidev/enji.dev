import bundeAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import withLayout from './remark/withLayout.mjs';
import withRestrictedHeading from './remark/withRestrictedHeading.mjs';
import rehypePrism from 'rehype-prism-plus';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

const withBundleAnalyzer = bundeAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, withLayout, withRestrictedHeading],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react',
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
