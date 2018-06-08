/*1* Напишите функцию get_quadrant_number, которая принимает 
координаты точки X и Y и возвращает номер четверти, которой 
эта точка принадлежит. Помните, что если точка лежит на оси, то 
она не принадлежит ни одной четверти, в этом случаи нужно 
выбросить исключение типа Error без сообщения об ошибке.
   Y
 2 ║ 1 
═══╬═══X
 3 ║ 4 

Тестовые данные для тестирования:
x = 1, y = 1. Номер четверти: 1
x = -1, y = 1. Номер четверти: 2
x = -1, y = -1. Номер четверти: 3
x = 1, y = -1. Номер четверти: 4
x = 0, y = 0. Результат: Error*/
/*
function get_quadrant_number(x, y) {
	 
	 if (x > 0 && y > 0) {
	 	return "Номер четверти: " + 1;
	 }else if (x < 0 && y > 0) {
	 	return "Номер четверти: " + 2;
	 }else if (x < 0 && y < 0) {
	 	return "Номер четверти: " + 3;
	 } else if (x > 0 && y < 0) {
	 	return "Номер четверти: " + 4;
	 }else {
	 	throw new Error("Ошибка");	
	 } 	
	 	 
}

console.log(get_quadrant_number(1, 1));
console.log(get_quadrant_number(-1, 1));
console.log(get_quadrant_number(-1, -1));
console.log(get_quadrant_number(1, -1));
console.log(get_quadrant_number(0, 0));
*/

// 2*. Генератор случайных паролей. Требуется реализовать генератор
// (function*) случайных паролей указанной длины. В пароле можно 
// использовать любые символы в верхнем и нижнем регистре. 
// Например: password_generator(16), вернет случайный пароль 
// длиной 16 символов.


/*
function* password_generator (numb) {
	
	var simbolSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	while (true) {
		var password = "";

		for (var i = 0; i < numb; i++) {
	    	password += simbolSet.charAt(Math.floor(Math.random() * simbolSet.length));
		};

		yield password;
	};
	

	

};

var passwordGeneration = password_generator(16);

console.log(passwordGeneration.next().value);
console.log(passwordGeneration.next().value);
console.log(passwordGeneration.next().value);
console.log(passwordGeneration.next().value);*/