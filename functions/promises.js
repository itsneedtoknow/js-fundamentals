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
// Напишите функцию fetchAll(urls), которая принимает массив ссылок.
//Используя map и fetch, создайте массив промисов.
//Используйте Promise.all, чтобы дождаться загрузки всех данных.
//Верните (или выведите) массив имен пользователей (name), полученных по этим ссылкам.
function fetchAll(urls){
    let arrayOfPromises =[]
    urls.map(item=>{

        arrayOfPromises.push(fetch(item))
    })
    Promise.all(arrayOfPromises)
    .then(responses => {return Promise.all(responses.map(item =>{
       return  item.json()
    }))}
)
    .then(data => {
        let names= data.map(item=>{
           return item.name
        })
        console.log(names)
    })
    
}
const urlss = [
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/3'
];
fetchAll(urlss)

function getUser(id){
    return new Promise(function(resolve){
        if( id=== 1){
            setTimeout(()=>{
                resolve( {id: 1, name: 'Admin', role: 'admin'})
            }, 1000)
            
        }else{
            resolve( {id: id, name: 'Guest', role: 'user'})
        }
    })
}
function getDashboard(user){
    return new Promise(function(resolve, reject){
    if(user.role === 'admin'){
        setTimeout(()=>{
           resolve("Данные админ-панели") ;
        }, 1000)
    }else if(!user.role === 'admin'){
        reject("Доступ запрещен");
    }
})
}
getUser(1)
.then((user)=>getDashboard(user))
.then((userrole)=>console.log(userrole))


function getTodoIds(){
    return new Promise(()=>
        setTimeout(()=>resolve([1, 2, 3]), 500))
}
function getTodoById(id){
    return new Promise(()=>
        setTimeout(()=>resolve({ id, title: "Дело №" + id }), 500))
}
getTodoIds()
.then((data)=> getTodoById(data[0]))
.then(dataZero=>console.log(dataZero.title))
.catch(err => console.log(err))