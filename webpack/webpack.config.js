// merge webpack.common.js with webpack.dev.js or webpack.prod.js

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars; // env는 package.json의 start, build의 env= 에 오는 값이 된다.
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
