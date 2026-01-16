
// вызови greet так, чтобы она вывела "Привет, Анна!" используя call
const user = {
  name: 'Анна',
  age: 28
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
greet.call(user, 'Привет' , "!")
greet.apply(user, ['Добрый день', "!"])
let sayHi = greet.bind(user, "Привет")
sayHi(')))')