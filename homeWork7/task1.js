// Завдання 1

// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

function handleNum(number, handleEven, handleOdd) {
	if (number % 2 === 0) {
		handleEven();
	} else {
		handleOdd();
	}
}

// Функція для обробки парного числа
function handleEven() {
	console.log("number is even");
}

// Функція для обробки непарного числа
function handleOdd() {
	console.log("number is odd");
}

// Виклик функції handleNum з довільним числом і колбек функціями
handleNum(10, handleEven, handleOdd); // "number is even"
handleNum(7, handleEven, handleOdd); // "number is odd"
