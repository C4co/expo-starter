module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // alias path
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components/index.ts',
            '@modules': './src/modules/index.ts',
            '@routes': './src/routes/index.ts',
            '@styles': './src/styles/index.ts',
            '@repositories': './src/repositories/index.ts',
            '@models': './src/models/index.ts',
            '@server': './src/server/index.ts',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
}
