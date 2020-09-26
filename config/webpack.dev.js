const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   */
  mode: "development",
  watch: true,

  /**
   * Devtool
   *
   * Control how source maps are generated.
   */
  devtool: "inline-source-map",
});
