/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@parrot/ui",
  "@parrot/login",
  "@parrot/menu",
  "@parrot/store",
]);
const withPlugins = require("next-compose-plugins");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([withTM], nextConfig);
