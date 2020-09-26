const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: [paths.src + "/index.ts"],

  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "umd",
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },

  externals: {
    react: "react",
    "react-native": "react-native",
    "react-hook-form": "react-hook-form",
  },
  /**
   * Plugins
   *
   * Customize the Webpack build process.
   */
  plugins: [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     */
    new CleanWebpackPlugin(),
  ],

  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      /**
       * TypeScript
       *
       */
      {
        test: /\.(ts|tsx)$/,
        // include: paths.src,
        exclude: /^node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
};
