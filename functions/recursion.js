//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n
//Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// function sumToOne(n){
//     let res = 0;
//     for (let i = 0; i <= n; i++){
//         res =+i;
//     }
// console.log(res);
// }
// sumToOne(3);

function sumToTwo(n){
  if (n == 1){
    console.log(1);
    
  }else{
    console.log(n + sumToTwo (n-1));
    
  }

}
sumToTwo(4);