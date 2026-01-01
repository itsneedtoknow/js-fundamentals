//Задача: выражение, которое вернёт true, если: есть хотя бы одно платное мероприятие

const events = [
  { title: 'Forum', price: 0 },
  { title: 'Workshop', price: 100 },
  { title: 'Meetup', price: 0 }
];
let hasPaidEvents = events.some(item => item.price > 0);


//Задача: определить, форма заполнена не полностью
const formFields = [
  { value: 'Anna' },
  { value: ' ' },
  { value: 'email@test.com' }
];

let isFilledForm = formFields.every(item => item.value.trim() !== '');

//Задача: нужно ли открыть регистрацию на мероприятия?
const specialEvents = [
  { title: 'Семинар по логистике', date: '2026-06-10', price: 100 },
  { title: 'Воркшоп по складам', date: '2025-07-20', price: 0 },
  { title: 'Конференция по транспорту', date: '2024-12-01', price: 50 }
];

const currentDate = new Date();
let specialEventsOpen = specialEvents.some(item => {
    let eventDate = new Date(item.date);

    return eventDate > currentDate;
})
// получить будущие мероприятия
let futureSpecialEvents = specialEvents.filter(item => {
    let itemDate = new Date(item.date);
    return itemDate > currentDate;
})
