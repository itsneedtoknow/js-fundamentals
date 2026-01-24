//Встроенная функция setTimeout использует колбэк-функции. 
// Создайте альтернативу, использующую промисы.
//Функция delay(ms) должна возвращать промис, 
// который перейдёт в состояние «выполнен» через ms миллисекунд, 
// так чтобы мы могли добавить к нему .then:

function delay(ms){
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve('done'), ms)
    }
)
}
// Напишите функцию randomDelay(), которая возвращает промис.
//С вероятностью 50% промис должен выполниться успешно через 1 секунду с текстом "Успех".
//С вероятностью 50% промис должен завершиться ошибкой через 1 секунду с текстом "Ошибка".

function randomDelay(){
    return new Promise(
        function(resolve, reject){
            let i = Math.random();
            setTimeout(()=>{
                if(i > 0.5){
                                resolve('success')
                            }else{
                                    reject('fail')
                            }
            }, 1000)
            
        }
    )
}
randomDelay()
  .then(res => console.log(res))
  .catch(err => console.error(err));

//   У вас есть функция delay(ms), которую вы уже написали.
// Используя её, выведите в консоль число 1 через 1 секунду, затем число 2 еще через 2 секунды, и число 3 еще через 3 секунды.
// Требование: Не используйте «ад колбэков» (вложенность). Используйте цепочку .then().

delay(1000)
.then(()=>{
    console.log(1);
    return delay(2000);
})
.then(()=>{
    console.log(2);
    return delay(3000);
})
.then(()=>{
    console.log(3);
})

// Используя браузерное API fetch, сделайте запрос к JSONPlaceholder: https://jsonplaceholder.typicode.com.
// Получите объект пользователя.
// Выведите в консоль только его имя (name).
// Если запрос не удался (например, выключен интернет), выведите сообщение: "Произошла ошибка запроса".
// Подсказка: Помните, что fetch возвращает промис, а метод .json() — тоже промис.
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => {return response.json()})
.then(data =>{
    console.log(data.name);
})
.catch(err=>{
    console.log(err)
})
