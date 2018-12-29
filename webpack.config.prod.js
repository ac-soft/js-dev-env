import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  /* Prod should not use inline-source-map to allow minification */
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    /* dist - common convention for prod - meaning distribution */
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    /* Eliminate duplicate packages when generating bundle */
    new webpack.optimize.DedupePlugin(),

    /* Minify JS */
    new webpack.optimize.UglifyJsPlugion()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
