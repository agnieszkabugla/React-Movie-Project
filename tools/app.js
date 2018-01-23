import express from 'express';
import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv'; 
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

dotenv.config();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../public')));


// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Your app is running on localhost://" + port);
  }
});