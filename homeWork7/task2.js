// Завдання 2

// Створіть функцію яка приймає один параметр: num.
// Усередині функції виведіть значення num в консоль.
// Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
// Фунція повинна викликатися, доки num не стане менше або рівне 0.
// Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник.




function recursiveCount(num) {
    if (num <= 0) {
      console.log(num);
      return;
    }
    console.log(num);
    recursiveCount(num - 1);
  }
  
  // Виклик функції з аргументом 5
  recursiveCount(5);