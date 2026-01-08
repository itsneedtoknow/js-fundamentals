// Написать функцию bind, которая будет принимать объект с данными человека 
// и функцию logPerson логирования его в системе

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const personOne = {
    name: 'Mike',
    age: 19,
    job: 'manager'

}
console.log(logPerson.bind(personOne)())


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