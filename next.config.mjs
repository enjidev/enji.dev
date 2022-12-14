import bundeAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import withLayout from './remark/withLayout.mjs';
import withRestrictedHeading from './remark/withRestrictedHeading.mjs';
import withRestrictedFrontMatter from './remark/withRestrictedFrontMatter.mjs';
import rehypePrism from 'rehype-prism-plus';

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/work',
        destination: '/work/skills-and-tools',
        permanent: false,
      },
    ];
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

const withBundleAnalyzer = bundeAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      withLayout,
      withRestrictedHeading,
      withRestrictedFrontMatter,
    ],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react',
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
