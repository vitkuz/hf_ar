function Server(app, port) {
  this.name = 'Test microservice';
  this.port = port;
  this.instanse = app;
}

Server.prototype.start = function () {
  this.instanse.listen(this.port, () => {
    console.log(`${this.name} running on --> ${this.port}`);
  })
};

module.exports = Server;