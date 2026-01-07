
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
