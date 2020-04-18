const path = require('path');

module.exports = {
  entry: path.join(__dirname,'src','client','index.js'),
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  },
  target: 'node',
};
