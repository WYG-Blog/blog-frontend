module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  devServer: {
    proxy: {
      "/rpa2": {
        target: "http://rap2api.taobao.org/app/mock/273077/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/rpa2": ""
        }
      }
    }
  }
};
