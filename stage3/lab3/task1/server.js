// a)
/*
var http = require("http");
var fs = require("fs");
var param = process.argv[2];


console.log(process.argv[2]);


function responser(req, res) {
	fs.readFile(param + ".html", "utf-8", function(err, data) {
		if (err) {
			console.log("Ошибка");
		};
		res.writeHead(200, {'Content-Type': 'text/html'});
     	res.end(data);

	});
}


var server = http.createServer(responser);

server.listen(8080);
*/


// b)

var http = require("http");
var fs = require("fs");
var param = process.argv[2];
var lang = process.env.LANG;

console.log(process.argv[2]);
console.log(lang.substr(0, 2));

function responser(req, res) {
	fs.readFile(lang.substr(0, 2) + ".html", "utf-8", function(err, data) {
		if (err) {
			console.log("Ошибка");
		};
		res.writeHead(200, {'Content-Type': 'text/html'});
     	res.end(data);

	});
}


var server = http.createServer(responser);

server.listen(8080);