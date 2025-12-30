// Задача:
//получить новый массив, где будут только числа больше 6, умноженные на 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers
.filter(item => item > 6)
.map(item => item * 2);

console.log(result);
