const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  context: path.join(__dirname, "src"),

  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },

  devtool: "eval",

  devServer: {
    port: 4200
  },

  resolve: {
    alias: {
      frame: path.join(__dirname, "src/frame")
    }
  },

  plugins: [
    new htmlWebpackPlugin({
      title: "Native Framework",
      template: "./index.html"
    })
  ]
};
