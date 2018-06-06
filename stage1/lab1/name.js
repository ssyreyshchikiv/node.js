var http = require("http");

function responser(request, responsive) {// вызов метода создания http сервера
	console.log("HTTP works!");
	// console.log(request);
	// console.log(responsive);
	// responsive.writeHead(404, {'Content-Type':'text/plain'});
	responsive.writeHead(200, {'Content-Type':'text/plain'});
	responsive.write("<h1>Bello!</h1>");
	responsive.end();
};

var server = http.createServer(responser);

server.listen(8080);

