const emotionPresetOptions = {};
const path = require('path');

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions
);

module.exports = {
  babel: {
    plugins: [...emotionBabelPreset.plugins],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
