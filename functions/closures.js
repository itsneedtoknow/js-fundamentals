
//написать функцию createGreeting(name), которая:
//Принимает имя человека.
//Возвращает другую функцию.
//Внутренняя функция при вызове должна выводить: "Привет, " + name
function createGreeting(name){
    
    return function(){
        let message = "Привет, " + name;
        console.log(message);
        return message
    }
}
const greetVeta = createGreeting("Veta");
greetVeta()


//Задача:
//Напиши функцию createDiscounter(discount).
//Она принимает размер скидки (например, 0.1 для 10%).
//Она возвращает вторую функцию.
//Внутренняя функция принимает цену товара и возвращает новую цену с учетом скидки.

function createDiscounter(discount){
    return function(price){
        let discountValue = price - (price * discount / 1)
        //console.log(discountValue);
        return discountValue
    }
}
const tenPercentOff = createDiscounter(0.1); 
console.log(tenPercentOff(1000));

// нужно создать функцию, которая «запирает» внутри себя секретное слово, а потом выдает его по кусочкам.
//createSecret(word).
//Она должна возвращать другую функцию.
//Внутренняя функция при вызове должна возвращать строку: "Секрет: " + word.

function createSecret(word){
return function(){
    return 'Секрет: ' + word
}
}
let secret = createSecret('booo');
console.log(secret())



//Напиши функцию createSafe(password).
//Она возвращает функцию, которая принимает один аргумент — attempt (попытка).
//Если attempt совпадает с password, верни true.
//Если не совпадает — false

function createSafe(password){
    
    return function(attempt){
        if(attempt === password){
            return true
        }else{
            return false
        }
    }
}
let mousePass=createSafe('mouse');
console.log(mousePass('mouse'))

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
function bind(pers, func){
  return function(){
      func.bind(pers)()
  } 

}
let persin = bind(personOne, logPerson);
persin()

/**
* Нужно написать функцию, которая принимает число N и возвращает функцию,
* вызов которой первые N раз возвращает 'yes', а потом – 'no'.
*/
function canGetCount(n) {
// code here
let count = 1;

return function(){
    if (count <= n){
         count+=1
        return 'yes'
        
    }else{ 
        count+=1
        return 'no'
    }
}
}

const getOne = canGetCount(2);
console.log(getOne()) 
console.log(getOne()) 
console.log(getOne()) 


//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b

function sum(a){
    return function(b){
        return a + b
    }
}
let ssum = sum(1);
console.log(ssum(2));

// У нас есть встроенный метод arr.filter(f) для массивов. 
// Он фильтрует все элементы с помощью функции f. 
// Если она возвращает true, то элемент добавится в возвращаемый массив.
//Сделайте набор «готовых к употреблению» фильтров:
//inBetween(a, b) – между a и b (включительно).
//inArray([...]) – находится в данном массиве.
//Они должны использоваться таким образом:
//arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
//arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function inBetween(c, d){

    return function(h){
        if(h >= c && h <= d){
            return h
        }

    }

}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) );

function inArray(arrayy){

    return function(h){
       return arrayy.includes(h);
    }
}
console.log( arr.filter(inArray([1, 2, 10])) )