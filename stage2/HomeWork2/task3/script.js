// 3*. Работа с файлами. Файл "data.txt" заполнен случайными целыми числами, 
// числа разделены одним пробелом.
// Сформировать файл "out-1.txt" из элементов файла "data.txt", делящихся 
// без остатка на 2. Сформировать файл "out-2.txt" из элементов файла "data.txt", 
// возведенных в степень 3. Тестовый набор данных для тестирования можно 
// скачать отсюда: https://yadi.sk/d/s7Gz7ypi3XCBXP 
// Для записи текстовых файлов воспользуйтесь функцией 
// writeFile описанной в документации: 
// https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
// или в русской версии: 
// https://js-node.ru/site/article?id=23#fs_fs_writefile_file_data_options_callback

var fs = require('fs');
var arr;

fs.readFile("data.txt", function(err, data) {
	if(err) throw err;
	var strData = data.toString();
	var arr = strData.split(' ');

	var dataMod = arr.map(function(x) {
		if(x % 2 === 0) {
			return x
		}
	});
	dataMod = dataMod.join(" ");
	fs.writeFile("out-1.txt", dataMod);
	// console.log(dataMod);

	var dataPow = arr.map(function(x) {
		return x**3;
	});
	dataPow = dataPow.join(" ");
	fs.writeFile("out-2.txt", dataPow);

	// console.log(dataPow);
	// console.log(arr);

});

