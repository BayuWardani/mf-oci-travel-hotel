const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "oci",
    projectName: "travel-hotel",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
  });
};
