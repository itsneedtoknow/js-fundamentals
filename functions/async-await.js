//async перед функцией гарантирует что она вернет промис
//await употребляется только в async функциях, ждет пока выполнится промис, перед которым это слово стоит.

//Перепишите, используя async/await

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert);

async function loadJson(url) {
 
        let response = await fetch(url);

        if(response.status == 200){
            return response.json
        }else{
            throw new Error(response.status)
        }
}

// loadJson('no-such-user.json')
//   .catch(console.log);

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     })
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//   let name = prompt("Введите логин?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response= await fetch(url);
  
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
    
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//     let user;
//   let name = prompt("Введите логин?", "iliakan");
// while(true){
//   try{
//     user = loadJson(`https://api.github.com/users/${name}`);
//     break;
//   }catch(err){
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     };
// }
// }

// demoGithubUser();

async function getToDoList(id){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);

    try{
    if(response.status == 200){
      return await response.json();
    }else{
        throw new Error("Упс, задачи с таким ID нет!")
    }

    }catch(err){
        console.log(err)
    }


}
getToDoList(1)
.then(todo=>console.log(todo.title))