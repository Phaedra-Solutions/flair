const rewireAliases = require("react-app-rewire-aliases");
const path = require("path");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@common": path.resolve(__dirname, "./src/components/_common"),
    "@img": path.resolve(__dirname, "./src/img"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@styles": path.resolve(__dirname, "./src/styles"),
  })(config, env);

  return config;
};
