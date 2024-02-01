/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://flumuffel.de',
  priority: 0.6,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const defaultValue = (priority) => ({
      loc: path,
      changefreq: config.changefreq,
      priority: priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    });

    if (path === '/') {
      return defaultValue(1.0);
    }

    if (path === '/blog') {
      return defaultValue(0.9);
    }

    if (path === '/projekte') {
      return defaultValue(0.9);
    }

    if (path === '/heute-habe-ich') {
      return defaultValue(0.9);
    }

    // if (path.indexOf('/ich') === 0) {
    //   return defaultValue(0.8);
    // }

    return defaultValue();
  },
};
