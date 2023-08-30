/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Custom workspaces',
    description: 'Extra custom workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kisst.github.io/workspace_registry/',
    contactUrl: 'https://github.com/kisst/workspace_registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
