const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/beers", {
      target: "http://ontariobeerapi.ca/products",
      changeOrigin: true
    })
  );
};
