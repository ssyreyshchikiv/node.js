// Задача 1

// var express = require("express");
// var router = express.Router();



// router.use('/add', function(req, res, next) {
// 	res.send('User add');
// });

// module.exports = router;

// Задача 2

// var express = require("express");
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended: false});
// var router = express.Router();

// router.post('/add',urlencodedParser, function(req, res, next) {
// 	var user = req.body;
// 	console.log(user);
// 	 var login = req.body.login;
// 	 var password = req.body.password;
// 	 var email = req.body.email;
// 	 console.log(login);
// 	 console.log(password);
// 	 console.log(email);
// 	 res.send('Данные получены, login: ' + login + 
// 	 	', password: ' + password +', email: ' + email);

// });

// module.exports = router;




// Задача 3

var express = require("express");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var router = express.Router();


router.post('/add',urlencodedParser, function(req, res, next) {
	
	var title = JSON.stringify(req.body);
	var event = JSON.parse(title);
	console.log(event);
	console.log('Параметры POST запроса: ' + event);
});



module.exports = router;