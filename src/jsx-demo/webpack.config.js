var path = require('path');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

var config = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(jsx|js)?$/,
        loader: require.resolve('babel-loader')
    }]
  }
};

module.exports = config;