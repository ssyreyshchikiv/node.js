// 1**. 
// Напишите код функции reversePrint(), которая выведет значения переданного ей 
// односвязного списка в обратном порядке (4, 3, 2, 1). 
// Для вывода значений используйте функцию console.log().
	


// Напишите код функции reversePrint(), которая выведет значения переданного ей 
// односвязного списка в обратном порядке (4, 3, 2, 1). 
// Для вывода значений используйте функцию console.log().

function reversePrint(linkedList) {
   
    if (linkedList.next) {
        reversePrint(linkedList.next);
    }
    
    console.log(linkedList.value);         
        
}
   



var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

reversePrint(someList);




