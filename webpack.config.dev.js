import webpack from 'webpack';
import path from 'path';

const config = {
  context: path.resolve(__dirname, './public/src/'),
  entry: {
    // removing 'public/src' directory from entry point, since 'context' is taking care of that
    app: './index.js'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),  //note: physical files are only output by the production build task 'npm run build'
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public/src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        include: path.join(__dirname, './public/src/'), 
        exclude: path.join(__dirname, './node_modules/'), 
        use: {loader: 'babel-loader'} 
      },
      { 
        test: /\.css$/, 
        use: [{loader: 'style'}, {loader: 'css'}]          
      },
      { 
        test: /\.jpeg$/,
        use:{loader: "url-loader"}  
      }, 
      { 
        test: /\.png$/, 
        use: {loader: "url-loader"} 
      }
    ]
  }
    
};

module.exports = config; 
