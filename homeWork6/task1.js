// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)



// Function Declaration
function calculateArea(width, height) {
    return width * height;
  }
  console.log("Площа прямокутника", calculateArea(5, 10));
  
  // Function Expression
  const calculateAreaExpression = function(width, height) {
    return width * height;
  };
  console.log("Площа прямокутника", calculateAreaExpression(5, 10));
  
  // Arrow Function
  const calculateAreaArrow = (width, height) => {
    return width * height;
  };
  console.log("Площа прямокутника", calculateAreaArrow(5, 10));
  