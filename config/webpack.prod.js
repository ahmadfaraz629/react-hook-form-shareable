const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "umd",
  },

  /**
   * Optimization
   *
   * Production minimizing of JavaSvript
   */
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
