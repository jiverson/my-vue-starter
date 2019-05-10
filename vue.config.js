const path = require("path");

module.exports = {
  lintOnSave: false,
  // css: {
  //   modules: true
  // },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
