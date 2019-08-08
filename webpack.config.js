const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

module.exports = {
  entry: path.resolve(__dirname, "src/openmrs-esm-styleguide.js"),
  output: {
    libraryTarget: "system",
    filename: "openmrs-esm-styleguide.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.woff2?$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  externals: [/^@openmrs\/.+$/, "react", "react-dom"],
  plugins: [new CleanWebpackPlugin()]
};
