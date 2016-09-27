var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.js",
    app: "./src/app.js"
  },
  output: {
    path: __dirname + "/builds",
    filename: "[name].js"
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
        loader: ExtractTextPlugin.extract("style", "css!less")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.CommonsChunkPlugin("lib.js"),
    new webpack.optimize.UglifyJsPlugin({minimize: true, compress:{warnings: false}})
  ]
}
