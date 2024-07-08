// Завдання 4.1

// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.


let radius = 5;
let circleArea = Math.PI * Math.pow(radius, 2);
circleArea = circleArea.toFixed(2);

console.log(circleArea);