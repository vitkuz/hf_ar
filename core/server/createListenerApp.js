var express = require('express');

function createRequestListener(router) {
  const app = express();
  app.disable("x-powered-by");
  
  app.use(router);
  
  return app;
}

module.exports = createRequestListener;