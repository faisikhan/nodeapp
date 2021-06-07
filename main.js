// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:8077
server.listen(8077);
console.log("Server listening on port 8077 :  http://10.24.2.148:8077/");
