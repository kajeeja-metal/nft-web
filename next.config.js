const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const { locales, defaultLocale } = require('./i18n')
module.exports = {
    eslint: { ignoreDuringBuilds: true },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['https://smartworld-api.dev.feyverly.com','https://smartworld-api.uat.feyverly.com','https://smartworld-api.feyverly.com','privilege-api.dev.fysvc.com','privilege-api.uat.fysvc.com','privilege-api.fysvc.com'],
    },
    i18n: { locales, defaultLocale,localeDetection: false,loader: false },
    
},withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
  },
  webpack: config => {
    config.module.rules.forEach(rule => {
      if (rule.test.toString().includes('.scss')) {
        rule.rules = rule.use.map(useRule => {
          if (typeof useRule === 'string') {
            return { loader: useRule };
          }
          if (useRule.loader === 'css-loader') {
            return {
              oneOf: [
                {
                  test: new RegExp('.global.scss$'),
                  loader: useRule.loader,
                  options: {},
                },
                {
                  loader: useRule.loader,
                  options: { modules: true }
                },
              ],
            };
          }
          return useRule;
        });
        delete rule.use;
      }
    });
    return config;
  },webpack (config, options) {
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000
            }
        },
     });
     return config;
  }
});
