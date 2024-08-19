// Завдання 4.3

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radius = 10;
let height = 20;
let cylinder = Math.PI * Math.pow(radius, 2) * height;
cylinder = cylinder.toFixed(2);

console.log(cylinder);
