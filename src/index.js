'use strict';

const WebpackAssetsManifest = require('webpack-assets-manifest');
const { makeOptionsArray } = require('./helpers.js');

module.exports = function withAssetsManifest(nextConfig = {}) {
  const {
    assetsManifest = {}, // common options
    assetsManifestClient = null, // client only options
    assetsManifestServer = null, // server only options
  } = nextConfig;

  // Delete to prevent error with JSON.stringify in case nextConfig is used in customize.
  delete nextConfig.assetsManifest;
  delete nextConfig.assetsManifestClient;
  delete nextConfig.assetsManifestServer;

  return {
    ...nextConfig,
    webpack(config, options) {
      const manifestOptions = makeOptionsArray(
        assetsManifest,
        ! assetsManifestClient && ! assetsManifestServer ?
          assetsManifest :
          options.isServer ?
            assetsManifestServer :
            assetsManifestClient,
      );

      const plugins = manifestOptions.map(
        opt => new WebpackAssetsManifest({
          ...opt,
          // Pass this along so it can be used in customize/transform.
          nextOptions: {
            ...options,
          },
        }),
      );

      config.plugins.push( ...plugins );

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
