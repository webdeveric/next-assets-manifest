# Next Assets Manifest

[![Build Status](https://travis-ci.org/webdeveric/next-assets-manifest.svg?branch=master)](https://travis-ci.org/webdeveric/next-assets-manifest)
[![codecov](https://codecov.io/gh/webdeveric/next-assets-manifest/branch/master/graph/badge.svg)](https://codecov.io/gh/webdeveric/next-assets-manifest)
[![dependencies Status](https://david-dm.org/webdeveric/next-assets-manifest/status.svg)](https://david-dm.org/webdeveric/next-assets-manifest)
[![devDependencies Status](https://david-dm.org/webdeveric/next-assets-manifest/dev-status.svg)](https://david-dm.org/webdeveric/next-assets-manifest?type=dev)

Add [webpack-assets-manifest](https://github.com/webdeveric/webpack-assets-manifest) to your [Next.js](https://nextjs.org/) project.

```shell
npm install next-assets-manifest --save-dev
```

## Example Usage

Add to your `next.config.js`.

`assetsManifest`, `assetsManifestClient`, and `assetsManifestServer` are optional.

The values for these options can be found [here](https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema).

```js
const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  // These options are used for both client and server manifest plugins.
  assetsManifest: {
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
```
