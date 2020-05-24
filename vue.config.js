module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
              @import "src/assets/scss/app.scss";
              @import "src/assets/scss/fonts.scss";
              @import "src/assets/scss/home.scss";
              @import "src/assets/scss/switchTheme.scss";
              @import "src/assets/scss/variables.scss";
            `
          }
      }
    },
    configureWebpack: {
        module: {
          rules: [{
            test: /\.(ttf|otf|eot|woff|woff2)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "src/assets/fonts/[name].[ext]",
              },
            },
          }]
        }
      }
  };