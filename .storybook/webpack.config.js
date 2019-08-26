const path = require("path");

const styleguideWebpackConfig = require("../webpack.config.js");

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
  config.plugins = config.plugins.concat(...styleguideWebpackConfig.plugins);

  return config;
};
