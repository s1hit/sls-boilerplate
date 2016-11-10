const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const yaml = require('node-yaml');

function getFunctions() {
  const serverlessYml = yaml.readSync('serverless.yml');
  const webPackFunctions = {};
  const functionNames = Object.keys(serverlessYml.functions || {});
  functionNames.map((name) => {
    const handlerFile = serverlessYml.functions[name].handler.replace(/\.[^\.]*$/, '');
    webPackFunctions[handlerFile] = `./${handlerFile}.js`;
  });
  return webPackFunctions;
}

module.exports = {
  entry: getFunctions(),
  target: 'node',
  module: {
    loaders: [
      {test: /\.js/, loader: 'babel'},
      {test: /\.json/, loader: 'json-loader'},
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: '.env'},
    ]),
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [nodeExternals()]
};
