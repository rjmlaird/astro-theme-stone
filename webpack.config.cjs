const path = require('path');

module.exports = {
  entry: './src/index.js',  // Replace with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),  // The folder where bundled files will go
    filename: 'bundle.js',  // The name of the output bundle
  },
  resolve: {
    alias: {
      fs: path.resolve(__dirname, 'node_modules/fs-browserify'),  // Path to fs-polyfill
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // This will transpile your JS
        },
      },
    ],
  },
};
