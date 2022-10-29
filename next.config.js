const isDevelopment = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: !isDevelopment,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
