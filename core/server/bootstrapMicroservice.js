const Server = require('./Server');

function bootstrapMicroService(port, requestsListener) {
  const service = new Server(requestsListener, port);
  service.start();
}

module.exports = bootstrapMicroService;
