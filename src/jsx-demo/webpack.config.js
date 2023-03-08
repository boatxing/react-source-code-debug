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
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            babelrc: false,
            configFile: false,
            compact: false,
         
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,

          // Babel sourcemaps are needed for debugging into node_modules
          // code.  Without the options below, debuggers like VSCode
          // show incorrect code and set breakpoints on the wrong lines.
            sourceMaps: false,
            inputSourceMap: false,
          },
        },
      },
  ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = config;