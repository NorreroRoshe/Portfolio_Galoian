/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Добавьте этот блок только для серверной части (если проблемы возникают именно там)
    if (isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/assets/imgs/service/',  // Исправленный путь
              outputPath: 'public/assets/imgs/service/',  // Исправленный путь
            },
          },
        ],
      });
    }

    return config;
  },
};
