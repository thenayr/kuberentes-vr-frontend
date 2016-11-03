var path = require('path');
require('babel-polyfill');

var ENTRY_POINTS = [
  './src/js/app'
];

var JS_LOADERS = [
  'babel?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0'
];

module.exports = {
  entry: ENTRY_POINTS,
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    noParse: [
      /node_modules\/aframe\/dist\/aframe.js/,
    ],
    loaders: [
      {
        // JS.
        exclude: /(node_modules|bower_components)/,
        loaders: JS_LOADERS,
        test: /\.js$/,
      },
      {
        test: /\.(png|jpg|gif)$/, 
        loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  resolve: {
    root: path.resolve(__dirname),
    fallback: path.join(__dirname, 'node_modules'),
    modulesDirectories: [
      'src/js',
      'node_modules',
    ]
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  }
};
