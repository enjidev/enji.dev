const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: !isDevelopment,
  },
};
