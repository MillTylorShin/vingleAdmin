var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
   'webpack-dev-server/client?http://127.0.0.1:8080/',
   'webpack/hot/only-dev-server',
   './client'
  ],
  output: {
   path: path.join(__dirname, 'public', 'assets'),
   filename: "[name].js"
  },
  module: {
   loaders: [
     {
       test: /\.(js|jsx)$/,
       loader: "babel",
       exclude: /node_modules/,
       include: __dirname,
       query: {
         presets: ['es2015', 'react', 'stage-2']
       }
     }
   ]
  },
  resolve: {
   extensions: ["", ".js"]
 },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 4000)
    },
    host: '127.0.0.1'
  }
};
