const path = require("path");

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

  return config;
};
