var path = require('path');
var net = require('net');

module.exports = {
  entry: ['./server'],
  target: 'node',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
  },
  module: {
    loaders: [
      {
        test: /\.json$/ ,
        loader: 'json',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty'
  },
}
