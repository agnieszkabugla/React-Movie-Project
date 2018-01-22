import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    //'eventsource-polyfill', //necessary with hot reloading in IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails
    path.resolve(__dirname, './public/src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + './dist',  //note: physical files are only output by the production build task 'npm run build'
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public/src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, './public/src'), exclude: 'node_modules', loaders: ['babel'] },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      /* last for loaders are for Bootstrap's fonts */
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ],
    query: {
      presets: ['react', 'es2015']
    }
  },
    resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

/* module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}; */

