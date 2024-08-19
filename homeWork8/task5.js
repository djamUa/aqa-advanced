// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
	{ name: "Vlad", email: "vlad@bigmir.net", age: 21 },
	{ name: "Vlad2", email: "vlad@ukr.net", age: 26 },
	{ name: "Vlad3", email: "vlad@gmail.com", age: 32 },
];

for (const user of users) {
	const { name, email, age } = user;
	console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
