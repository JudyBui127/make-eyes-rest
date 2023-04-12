/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
            emitFile: !isServer,
          },
        },
      ],
    });
    return config;
  },
  // Add this line to include the public folder
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
}

module.exports = nextConfig
