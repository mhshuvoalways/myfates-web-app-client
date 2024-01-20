/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  env: {
    SITE_KEY: process.env.SITE_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_PANEL_BACKEND_URL: process.env.CLIENT_PANEL_BACKEND_URL,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    DASHBOARD_URL: process.env.DASHBOARD_URL,
  },
  i18n,
};

module.exports = nextConfig;
