const withAssetsManifest = require('../src/index.js');

function getMockWebpackConfig()
{
  return {
    plugins: [],
  };
}

function getMockWebpackOptions(isServer)
{
  return {
    isServer,
  };
}

test('withAssetsManifest returns an object', () => {
  const config = withAssetsManifest();

  expect( config ).toBeInstanceOf(Object);
});

test('assetsManifest option', () => {
  const config = withAssetsManifest({
    assetsManifest: {
      output: 'assets-manifest.json',
    },
  });

  const webpackConfig = getMockWebpackConfig();

  [ true, false ].forEach(
    isServer => config.webpack( webpackConfig, getMockWebpackOptions( isServer ) )
  );

  expect( webpackConfig.plugins ).toHaveLength(2);
});

test('assetsManifestClient/Server option - object', () => {
  [ 'assetsManifestClient', 'assetsManifestServer' ].forEach( key => {
    const config = withAssetsManifest({
      [ key ]: {
        output: 'assets-manifest.json',
      },
    });

    const webpackConfig = getMockWebpackConfig();

    [ true, false ].forEach(
      isServer => config.webpack( webpackConfig, getMockWebpackOptions( isServer ) )
    );

    expect( webpackConfig.plugins ).toHaveLength(1);
  });
});

test('assetsManifestClient/Server option - array', () => {
  [ 'assetsManifestClient', 'assetsManifestServer' ].forEach( key => {
    const config = withAssetsManifest({
      [ key ]: [
        {
          output: 'assets-manifest-1.json',
        },
        {
          output: 'assets-manifest-2.json',
        },
      ],
    });

    const webpackConfig = getMockWebpackConfig();

    [ true, false ].forEach(
      isServer => config.webpack( webpackConfig, getMockWebpackOptions( isServer ) )
    );

    expect( webpackConfig.plugins ).toHaveLength(2);
  });
});

test('webpack option', () => {
  const mockWebpack = jest.fn( config => config );

  const config = withAssetsManifest({
    webpack: mockWebpack,
  });

  config.webpack( getMockWebpackConfig(), getMockWebpackOptions() );

  expect(mockWebpack).toHaveBeenCalled();
});
