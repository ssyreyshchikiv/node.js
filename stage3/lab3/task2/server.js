var http = require("http");
var cp = require("child_process");
var door = cp.fork(__dirname + "/door.js");


function responser(req, res) {
	console.log(req.url);
 	door.send(req.url);
 	res.end();
 }

door.on('message', function(m) {
  console.log('Child got message: ', m);
});

var server = http.createServer(responser);

server.listen(8080);




