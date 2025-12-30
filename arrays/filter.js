// Задача:
//получить новый массив, где будут только числа больше 6, умноженные на 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers
.filter(item => item > 6)
.map(item => item * 2);


//Задача:
//получить массив имён (name) только активных пользователей.
const users = [
  { id: 1, name: 'Anna', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Kate', active: true },
];
let activeUsersNames = users
.filter(item => item.active)
.map(item => item.name);