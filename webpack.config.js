const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.resolve.extensions = ['.web.js', '.js', '.json', '.web.ts', '.ts', '.web.tsx', '.tsx'];
  return config;
};
