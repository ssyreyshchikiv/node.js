// 1. Требуется реализовать декоратор с параметрами pause, 
// который откладывает выполнение функции на указанное 
// количество секунд. Пример использования:
// function func() {
// 	console.log('Функция выполниться с задержкой в 2 секунды!');
// }
// pause(func, 2);
/*
function func() {
	console.log('Функция выполниться с задержкой в 2 секунды!');
}
// pause(func, 2);

function pause(func, sec) {
	return function() {
		setTimeout(func, sec, ...arguments);
	};
};

var funcPause = pause(func, 2000);

funcPause();
*/
/*2*. Требуется реализовать декоратор с параметрами returnObject, 
который в случае, если функция возвращает массив, подменяет 
его объектом. Имена задаются в параметрах декоратора. Декоратор 
универсальный, количество имен переменное.
Пример использования №1:*/


// function func() {
// 	return [1, 2]
// };

function return_object(func, ...arg) {
	return function() {
		var key = arg;
		var obj = {}
		var arr = func.apply(this);

		for(var i = 0; i < key.length; i++) {
			obj[key[i]] = arr[i];
		}
		// console.log(obj);
		return obj;
		// var key = func(...arg);
		
		// console.log(...arg);
		// var arr = func;
		// console.log(arr);
	}
}


// let funcDecor = return_object(func, 'one', 'two');

// let r = funcDecor();

// console.log(r.one); // 1
// console.log(r.two); //2


// Пример использования №2:
function func(){
	return ['Python', 'is', 'programming language']
}

r = return_object (func, 'a', 'b', 'c')();

console.log(r.c) // 'programming language'


