var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var mimeTypes = {
	".js": "text/javascript",
	".html": "text/html",
	".css": "text/css",
	".jpg": "image/jpeg",
	".gif": "image/gif"
};

http.createServer(function onRequest(request, responsive) {
		var pathname = url.parse(request.url).path;
		if(pathname == "/")
			{pathname = "/index.html"};
		var extname = path.extname(pathname);
		console.log(extname);
		var mimeType = mimeTypes[path.extname(pathname)];
		pathname = pathname.substring(1, pathname.length);
		if ((extname == ".gif") || (extname == ".jpg")) {
			var img = fs.readFileSync("./" + pathname);
			console.log(mimeType);
			responsive.writeHead(200, {"Content-Type": mimeType});
			responsive.end(img, "binary");
		} else {
			fs.readFile(pathname, "utf-8", function(error, data) {
			if (error) {
				console.log( "Could not find or open file " + pathname +" for reading");
			} else {

				responsive.writeHead(200, {"Content-Type" : mimeType});
				responsive.end(data);
			}
		})
		}
		
		}).listen(8080);
			
		
	


	
	



