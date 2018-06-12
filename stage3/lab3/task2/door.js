var url = require("url");

process.on('message', function(req) { 
var _get = url.parse(req, true).query;
 	process.send(_get);
});

