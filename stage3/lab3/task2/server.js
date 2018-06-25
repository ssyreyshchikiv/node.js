var cp = require("child_process");
var door = cp.fork(__dirname + "/door.js");


door.on("message", function(data) {
	console.log(data);
	door.kill();
})

