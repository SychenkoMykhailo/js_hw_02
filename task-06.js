// Задание 6
// Напиши скрипт со следующим функционалом: (edited) 
// 9:27
// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, 
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, 
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total. 
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
//  Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, 
// не обязательно. Если хочешь, в случае некорректного ввода, 
// показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
// при этом результат prompt записывать в массив чисел не нужно, 
// после чего снова пользователю предлагается ввести число в prompt.
let numbers = [];
let input = prompt("Введите число");
let total = 0;
for (let i = 0; input !== null; i ++) {
	if (isNaN(input)){
		alert("Вы ввели НЕ число")
		input = prompt("Введите число");
	} else {
		numbers.push(Number(input))
		input = prompt("Введите число");
	}
}
console.log(numbers);
let arrsum = function(arr){
	let sum = 0
	for (let i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	return sum
}
if (numbers = []) {
	console.log("Вы ничего не ввели");
} else {
	console.log(arrsum(numbers));
}

