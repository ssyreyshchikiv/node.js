/*2***. 
Требуется реализовать http сервер конвертации имен 
идентификаторов, который:
- если url от клиента: /camel_to_snake?name='identificator', 
то необходимо полученный идентификатор обработать в 
функции camel_to_snake(name) и результат отправить клиенту;
- если url от клиента: /snake_to_camel?name='identificator', 
то необходимо полученный идентификатор обработать в 
функции snake_to_camel(name) и результат отправить клиенту.
Так же требуется реализовать две функции для 
конвертации имен идентификаторов.
Имя идентификатора - это имена переменных, 
констант, функций, классов и т.д.
CamelCase (верблюжия нотация) - стиль написания 
составных слов, при котором несколько слов 
пишутся слитно без пробелов, при этом каждое 
слово внутри фразы пишется с заглавной буквы.
snake_case (змеиная нотация) - стиль написания 
составных слов, при котором несколько слов 
разделяются символом подчеркивания (_), и не 
имеют пробелов в записи, причём каждое слово 
пишется с маленькой буквы.
Напишите функцию camel_to_snake(name), которая 
принимает в качестве единственного аргумента 
имя идентификатора в CamelCase нотации и 
возвращает его запись в змеиной нотации.
Напишите функцию snake_to_camel(name), которая 
принимает в качестве единственного аргумента 
имя идентификатора в змеиной нотации и 
возвращает его запись в CamelCase нотации.
Тестовый набор данных для тестирования сервера №1:
Входные данные
'CamelCase'
Выходные данные
'camel_case'
Тестовый набор данных для тестирования сервера №2
Входные данные
'getUserId'
Выходные данные
'get_user_id'
Тестовый набор данных для тестирования сервера №3
Входные данные
'snake_case'
Выходные данные
'SnakeCase'
Тестовый набор данных для тестирования сервера №4
Входные данные
'set_repository'
Выходные данные
'SetRepository'*/

var http = require("http");
var url = require("url");
var converter = require("./script.js");

var server = http.createServer();
server.listen(8080);

server.on("request", function(req, res) {
  res.writeHead(200, {"Content-Type":"text/plain"})

  var functionName = url.parse(req.url).pathname.slice(1);
  console.log(functionName);
  
  var identificator = url.parse(req.url, true).query.name;
  console.log(identificator);


  if (functionName === "camel_to_snake") {
  	res.end(converter.camel_to_snake(identificator));
  }
    
  if (functionName === "snake_to_camel") {
  	res.end(converter.snake_to_camel(identificator));
   }
    

});

