const path = require('path');
const Dotenv = require('dotenv-webpack');
const sourceMaps = require('@zeit/next-source-maps')();
const withImages = require("next-images");
const webpack = require('webpack');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  cssLoaderOptions: {
    url: false
  },
  sourceMaps,
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Silence moment warnings for removing locales from build
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment/,
      }),

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      api: path.resolve(__dirname, 'api'),
      components: path.resolve(__dirname, 'components'),
      store: path.resolve(__dirname, 'store'),
      utils: path.resolve(__dirname, 'utils')
    };

    return config;
	},
});
