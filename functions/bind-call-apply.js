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