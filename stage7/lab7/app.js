var express = require("express");
var app = express();


var myRouter = require("./router.js");
app.listen(3000);

app.use(express.static("./"));

app.use("/", myRouter);