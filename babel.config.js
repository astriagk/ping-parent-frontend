module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@services': './src/services',
          '@pages': './src/pages',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@config': './src/config',
          '@constants': './src/constants',
          '@styles': './src/styles',
          '@locales': './src/locales',
          '@schemas': './src/schemas',
        },
      },
    ],
  ],
};
