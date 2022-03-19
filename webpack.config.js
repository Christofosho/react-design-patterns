const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.jsx",
  module: {
    rules: [{
      test: /\.jsx$/,
      use: [
        { loader: "babel-loader" }
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/main.html"
  })]
};