var static = require("node-static");
var http = require("http");

var file = new static.Server("./dist");

http
  .createServer(function (req, res) {
    file.serve(req, res);
  })
  .listen(4000);
console.log("Server kjører på port: 4000");
