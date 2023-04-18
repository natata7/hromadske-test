const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
  images: {
    domains: ['static.hromadske.radio'],
  },
};

module.exports = nextConfig;
