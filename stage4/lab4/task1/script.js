
// task1
/*function say() {
	console.log("Привет, мир!");
}

say();*/

// task2



var arr = process.argv;

arr = arr.splice(2);

var sum = 0;


for(var i = 0; i < arr.length; i++) {
	var str = arr[i];
	
	number = parseInt(str);
	sum += number;
};
console.log(sum);