var http = require("http");
var express = require('express');

const createRequestListenerApp = require('./core/server/createListenerApp');
const bootstrapMicroservice = require('./core/server/bootstrapMicroservice');

const books = require('./routes/books');
const quotes = require('./routes/quotes');

const requestsListenerApp1 = createRequestListenerApp(books);
const requestsListenerApp2 = createRequestListenerApp(quotes);

const appConfig = {
  apps: [
    {port:5000},
    {port:5001}
  ],
  deploy: {}
};

const { apps } = appConfig;
console.log(apps);

bootstrapMicroservice(apps[0].port, requestsListenerApp1);
bootstrapMicroservice(apps[1].port, requestsListenerApp2);

// function Server(app, port) {
//   this.expressApp = app;
//   this.port = port;
//   // this.instance = http.createServer(this.expressApp);
// }
//
// Server.prototype.start = function() {
//   this.expressApp.listen(3000);
// };
//
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Timout finish');
//     resolve();
//   }, 3000)
// });
//
// const createRequestListener = (function createRequestListener() {
//
//
//
//   // const PORT = process.env.PORT;
//
//   return app;
//
// }());
//
//
// p1.then(() => bootstrapMicroService(createRequestListener));
//
// bootstrapMicroService(createRequestListener);
//
// function bootstrapMicroService(app) {
//   console.log("Starting microservice");
//   const server = new Server(app);
//   server.start();
// }


