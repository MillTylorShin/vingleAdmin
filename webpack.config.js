var path = require('path');

module.exports = {
 context: __dirname,
 entry: {
   bundle: "./client.js"
 },
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
 }
};
