var http = require('http');
var json = require('./affor.json');

 var server = http.createServer().listen(8080);

server.on('request', function(req, res)  {
  res.writeHead(200, {'Content-Type' : 'application/json',
                      'Access-Control-Allow-Origin': '*'
  });
  
  res.end(JSON.stringify(json[Math.floor(Math.random()*json.length)]));
});