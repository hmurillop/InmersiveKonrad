const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
 
module.exports = {
   entry: './src/index.js',
   output: {
       filename: 'index.js',
       path: path.resolve(__dirname, 'dist'),
       clean:true
   },
   plugins:[
      new HtmlWebpackPlugin({tittle:"My Webpack",template:"src/index.html"}),
      new MiniCssExtractPlugin()
    ],
   devServer:{
      watchFiles: ["src/**/*.js", "src/**/*.html", "src/**/*.scss"]
    },
   module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],
      },
    ],
  }, 
};
