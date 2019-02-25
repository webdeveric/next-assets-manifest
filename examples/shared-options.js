const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  // These options are used for both client and server manifest plugins.
  // https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema
  assetsManifest: {
    customize(entry, original, manifest, asset) {
      // You can customize the key and/or value here.

      return {
        key: entry.key,
        value: entry.value,
      };
    },
    done(manifest) {
      console.log( `${manifest}` );
    },
  },
  // Customize the client side manifest.
  assetsManifestClient: {
    output: 'client-manifest.json',
  },
  // Customize the server side manifest.
  assetsManifestServer: {
    output: 'server-manifest.json',
  },
});
