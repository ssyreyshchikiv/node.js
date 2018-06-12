/*
1*. Напишите функцию getFreeLand, которая принимает 
два аргумента, оба из которых массивы:
- первый массив: площадь садового участка в сотках и соотношение сторон
- второй массив: ширину и длину одной грядки в метрах.
Функция разбивает грядки на участке и возвращает количество 
незанятого места в квадратных метрах.
1 сотка - это квадрат земли площадью 100м2.
В случаи ошибок нужно выбросить исключение типа Error с сообщеним:
"Не задана площадь участка"
"Не задана площадь грядки"
"Размер грядки больше размера участка"
Тестовый набор данных №1
Входные данные
[100, '1:1']
[15, 25]
Выходные данные
250
Тестовый набор данных №2
Входные данные
[0, '1:1']
[15, 25]
Выходные данные
Error:Не задана площадь участка
Тестовый набор данных №3
Входные данные
[100, '1:1']
[5, 0]
Выходные данные
Error:Не задана площадь грядки
Тестовый набор данных №4
Входные данные
[6, '3:2']
[40, 28]
Выходные данные
Error:Размер грядки больше размера участка
*/

function getFreeLand(arr1, arr2) {
	let plottage = arr1[0] * 100;
	let widthA = arr1[1];
	let widthB = arr1[1];
	widthA = widthA.charAt(0);
	widthB = widthB.charAt(2);
	console.log(widthA);
	console.log(widthB);

	let widthOfTheSection = Math.sqrt(plottage / widthA);
	let lengthOfTheSection = Math.sqrt(plottage / widthB);

	console.log(widthOfTheSection);
	console.log(lengthOfTheSection);

	if (arr1[0] === 0) {
    	err = new Error('Не задана площадь участка');
    throw err;
  	}

  	if (arr2[0] === 0 || arr2[1] === 0) {
    	err = new Error('Не задана площадь грядки');
    throw err;
  	}

  	if (plottage < (arr2[0] * arr2[1])) {
    	err = new Error('Размер грядки больше размера участка');
    throw err;
  	}

  	let result = (plottage % (arr2[0] * arr2[1]));
  	console.log('Незанятое место = ' + result);

  	return result;


}

getFreeLand([6, '3:2'],[40, 28]);
