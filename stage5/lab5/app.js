// Задача 1.
// Создайте простое приложение на express. Реализуйте роутер который принимает
// следующий url /[controller]/[action]
// Пример url: http://localhost:3000/user/add
// controller = 'user'
// action = 'add'

// var express = require("express");
// var app = express();

// var myRouter = require("./router.js");
// app.listen(3000);

// app.use("/user", myRouter);



// Задача 2.
// Создайте простое приложение на express. Реализуете POST форму регистрации, логин,
// почта , пароль. Обработайте получение данных из формы в роутере.

// var express = require("express");
// var app = express();


// var myRouter = require("./router.js");
// app.listen(3000);

// app.use(express.static("public"));

// app.use("/user", myRouter);




// Задача 3.
// Получите данные из POST формы (задача 2) и сгенерируйте HTML шаблон уведомления о 
// регистрации с помощью шаблонизатора mustache 

var express = require("express");
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var app = express();

	app.set('views', __dirname + '/views');
	app.engine('mustache', mustacheExpress());
	app.set('view engine', 'mustache');

var myRouter = require("./router.js");
app.listen(3000);

app.use(express.static("public"));

// app.use("/user",  function(req, res, next) {
// 	next();
// });

app.post('/user/add',urlencodedParser, function(req, res, next) {
 	var title = JSON.stringify(req.body);
	var event = JSON.parse(title);
	console.log(event);
	console.log('Параметры POST запроса: ' + event);
	res.render('index', event);
});