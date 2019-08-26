const path = require("path");

const styleguideWebpackConfig = require("../webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async ({ config }) => {
  if (!config.resolve) {
    config.resolve = {
      alias: {}
    };
  }
  config.resolve.alias["ejs"] = path.resolve(
    __dirname,
    "../node_modules/ejs/ejs.js"
  );

  config.module.rules = styleguideWebpackConfig.module.rules;
  config.plugins.push(new MiniCssExtractPlugin());

  return config;
};
