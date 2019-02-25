const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  // assetsManifestClient and assetsManifestServer can be an array of options.
  // Each object in the array will create a new manifest.
  // https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema
  assetsManifestClient: [
    {
      output: 'asset-manifest.json',
    },
    {
      output: 'asset-integrity-manifest.json',
      integrity: true,
      customize(entry, original, manifest, asset) {
        return {
          key: entry.value,
          value: asset && asset.integrity,
        };
      },
    },
  ]
});
