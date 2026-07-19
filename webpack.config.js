const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    clean: true,
  },
  devServer: {
    port: 5501,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/icons", to: "src/icons" },
        { from: "src/img", to: "src/img" },
      ],
    }),
  ],
};
