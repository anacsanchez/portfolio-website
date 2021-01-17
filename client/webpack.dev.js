const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    sourceMapFilename: 'bundle.js.map'
  },
  plugins: [new LiveReloadPlugin({appendScriptTag: true})]
});
