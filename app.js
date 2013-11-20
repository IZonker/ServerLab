var http = require("http");

var server = http.Server();

server.listen(3000, "127.0.0.1");

server.on("request",function(req,res) {
    res.end("hello world");
});