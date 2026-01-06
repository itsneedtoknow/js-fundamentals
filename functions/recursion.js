
// ---------------------------------1
// //Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n
//Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumToOne(n){
    let res = 0;
    for (let i = 0; i <= n; i++){
        res =+i;
    }
console.log(res);
}
//sumToOne(3);
// ---------------------------------2
function sumToTwo(n){
  if (n == 1){
    console.log(1);
    
  }else{
    console.log(n + sumToTwo (n-1));
    
  }

}
//sumToTwo(4);
// ---------------------------------3
//Напиши функцию countDown(n), 
// которая принимает число и выводит в консоль числа от этого числа до 1

function countDown(n){
  if(n <= 0){
    return
  }
  console.log(n);
  countDown(n - 1);
}
//countDown(4)
// ---------------------------------4
//Напиши функцию factorial(n), которая считает произведение чисел от n до 1.
function factorial(n){
if(n <= 0){
  return 1
}
  return n * factorial(n - 1);
}

//console.log(factorial(5))
// ---------------------------------5
//Задача: Напиши функцию fib(n), которая возвращает \(n\)-ое число Фибоначчи.
function fib(n){
  if(n <= 0){
    return n;
  }
  
  return (fib(n - 1) + fib(n - 2));
}
