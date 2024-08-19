// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// // Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

// Функція для ділення
function divide(numerator, denominator) {
	if (typeof numerator !== "number" || typeof denominator !== "number") {
		throw new Error("Both arguments must be numbers");
	}
	if (denominator === 0) {
		throw new Error("Denominator cannot be zero");
	}
	return numerator / denominator;
}

// Виклики функції divide у блоці try...catch
try {
	console.log(divide(10, 2)); // 5
} catch (error) {
	console.error(error.message);
} finally {
	console.log("Робота завершена");
}

try {
	console.log(divide(10, 0)); // Помилка
} catch (error) {
	console.error(error.message);
} finally {
	console.log("Робота завершена");
}

try {
	console.log(divide(10, "a")); // Помилка
} catch (error) {
	console.error(error.message);
} finally {
	console.log("Робота завершена");
}

try {
	console.log(divide("a", 2)); // Помилка
} catch (error) {
	console.error(error.message);
} finally {
	console.log("Робота завершена");
}
