var webpack = require("webpack");
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: "./src/main.js",
    app: "./src/app.js"
  },
  output: {
    path: __dirname + "/builds",
    filename: "js/[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.(css|less)$/i,
        exclude: /node_modules/,
        loader: "style!css!less" //ExtractTextPlugin.extract("style", "css!less")
      },
      {
        test: /\.jpg$/i,
        loader: "url",
        query: {
          limit: 30000,
          mimetype: "image/jpg"
        }
      }
    ]
  },
  plugins: [
    //new ExtractTextPlugin("css/style.css"),
    new HtmlWebpackPlugin({
      chunks: ["main", "js/lib.js"],
      minify: {collapseWhitespace:true},
      title: "hello world",
      template: "./src/html.tpl"
    }),
    new HtmlWebpackPlugin({
      chunks: ["app", "js/lib.js"],
      minify: {collapseWhitespace:true},
      title: "hello world",
      template: "./src/html.tpl",
      filename: "test.html"
    }),
    new webpack.optimize.CommonsChunkPlugin("js/lib.js"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress:{
        warnings: false
      }
    })
  ]
}
