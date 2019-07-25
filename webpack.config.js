const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/styleguide.js"),
  output: {
    libraryTarget: "system",
    filename: "styleguide.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  externals: [/^@openmrs\/.+$/, "react", "react-dom"]
};
