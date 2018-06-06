var http = require("http");
var fs = require('fs');

var fileName = "index.html";
var fileHeader = "header.html";
var fileBody = "body.html";
var fileFooter = "footer.html";

function responser(request, responsive) {
	/*fs.readFile(fileName, "utf-8", function(err, data) {
		if(err) {
			console.log('Could not find or open file for reading\n');
		} else {
			responsive.writeHead(200, {"Content-Type": "text/html"});
			responsive.write(data);

		}
	});*/


	fs.readFile(fileHeader, "utf-8", function(err, data) {
	responsive.writeHead(200, {"Content-Type": "text/html"});
	responsive.write(data);
		fs.readFile(fileBody, "utf-8", function(err, data) {
		responsive.write(data);
			fs.readFile(fileFooter, "utf-8", function(err, data) {
			responsive.end(data);
			});
		});
	});
	
	

	console.log("HTTP works!");
	
};


var server = http.createServer(responser);

server.listen(8080);










