const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:4000",//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''//这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
        }
      },
      '/server': {
        target: "http://localhost:8088",
        changeOrigin: true,
        pathRewrite: {
          '^/server': ''
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  }
};
