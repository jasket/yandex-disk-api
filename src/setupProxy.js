const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://login.yandex.ru",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    })
  );
  app.use(
    proxy("/disk", {
      target: "https://cloud-api.yandex.net/v1/disk",
      changeOrigin: true,
      pathRewrite: { "^/disk": "" }
    })
  );
};
