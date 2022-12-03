const { defineConfig } = require("@vue/cli-service");
const { resolve } = require("path");

module.exports = defineConfig({
  chainWebpack: (configs) => {
    configs.resolve.alias.set(
      "@components",
      resolve(__dirname, "src/components")
    );
    configs.resolve.alias.set(
      "@images",
      resolve(__dirname, "src/assets/images")
    );
  },
  transpileDependencies: true,
});
