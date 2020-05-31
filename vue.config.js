module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
              @import "src/assets/scss/app.scss";
              @import "src/assets/scss/customSelect.scss";
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
          rules: [
            {
              test: /\.(ttf|otf|eot|woff|woff2)$/,
              use: {
                loader: "file-loader",
                options: {
                  name: "src/assets/fonts/[name].[ext]",
                },
              },
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: "src/assets/images/[name].[ext]",
                  },
                },
              ],
            },
            {
              test: /\.(pdf)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: "src/assets/files/[name].[ext]",
                  },
                },
              ],
            },
          ]
        }
      }
  };