const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  assetsManifest: {
    // https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema
    output: 'assets-manifest.json',
  },
});
