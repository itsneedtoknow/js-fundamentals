// Задача:
//получить новый массив, где будут только числа больше 6, умноженные на 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers
.filter(item => item > 6)
.map(item => item * 2);


//Задача:
//получить массив имён (name) только активных пользователей.
const usersEng = [
  { id: 1, name: 'Anna', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Kate', active: true },
];
let activeUsersNames = usersEng
.filter(item => item.active)
.map(item => item.name);

// Задачи:
//Получить массив имён только активных пользователей.
//Получить список пользователей, зарегистрировавшихся после 1 октября 2025.
//Посчитать общее количество активных пользователей.
const users = [
  { name: "Анна", active: true, registrationDate: "2025-10-01" },
  { name: "Иван", active: false, registrationDate: "2025-09-28" },
  { name: "Мария", active: true, registrationDate: "2025-10-03" }
];

let activeUsers = users.filter(item => item.active);
let registeredUsers = users.filter(item => {
  let registrDate= new Date(item.registrationDate);
  let deadLineDate = new Date('2025-10-01');
  return registrDate  > deadLineDate;
} )
let totalActive = activeUsers.length;