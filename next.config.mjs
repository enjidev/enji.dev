import bundeAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import withLayout from './remark/withLayout.mjs';

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
    remarkPlugins: [remarkFrontmatter, withLayout],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
