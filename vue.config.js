module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rick-morty-pwa/'
    : '/',
};
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {

  configureWebpack: {

    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|css)$/,
      })
    ]
  }
};