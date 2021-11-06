const fs = require('fs');
const path = require('path');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/storybook-preset-craco',
    '@emotion/babel-preset-css-prop',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
      },
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('../node_modules/@emotion/react'),
          '@emotion/styled': getPackageDir('../node_modules/@emotion/styled'),
          'emotion-theming': getPackageDir('../node_modules/@emotion/react'),
        },
      },
    };
  },
};
