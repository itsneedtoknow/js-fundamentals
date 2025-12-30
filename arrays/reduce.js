//Задача: посчитать общую сумму
const prices = [100, 200, 50];
let result = prices.reduce((sum, item) => sum + item, 0);


//Посчитать итоговую сумму заказа.
const cart = [
  { title: 'Book', price: 500, count: 2 },
  { title: 'Pen', price: 50, count: 3 }
];

let total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

//Задача

//Оставить только платные события
//Получить массив названий (title)
//Посчитать общую стоимость всех платных мероприятий

const events = [
  { id: 1, title: 'Форум', date: '2025-01-10', price: 0 },
  { id: 2, title: 'Семинар', date: '2025-02-12', price: 150 },
  { id: 3, title: 'Конференция', date: '2025-02-20', price: 300 },
  { id: 4, title: 'Митап', date: '2025-01-25', price: 0 }
];

let paidEvents = events.filter(item => item.price > 0);
let paidEventsTitles = paidEvents.map(item => item.title);
let paidEventsTotal = paidEvents.reduce((sum, item)=>sum + item.price, 0);

