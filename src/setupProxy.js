const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://login.yandex.ru",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    })
  );
};
