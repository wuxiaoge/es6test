var webpack = require("webpack");

module.exports = {
  entry: {
    lib: ["./src/user.js", "./src/play.js"],
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style!css",
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: "style!css!less",
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({names: ["lib"]}),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
