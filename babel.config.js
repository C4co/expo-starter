module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components/index.ts',
            '@modules': './src/modules/index.ts',
            '@routes': './src/routes/index.ts',
            '@styles': './src/styles/index.ts',
            '@models': './src/models/index.ts',
            '@services': './src/services/index.ts',
            '@layouts': ['./src/layouts/index.ts'],
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
}
