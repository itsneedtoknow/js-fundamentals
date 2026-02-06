/*
позволяют создавать множество объектов
класс имеет: конструктор, свойства, методы
свойства и методы могут быть статические (только для класса), приватные (#), защищенные (_), и публичные
с помощью слова extends помогает наследовать класс
наследуемые классы можно расширять: добавлять новые свойства (перед этим в конструктор передать super()) и новые методы,
либо изменять или переопределять методы родителя (в начале добавить super.method(), если хотим что-то добавить в старый)
    class Human{

    type= 'human'

      constructor(name, age, sex){
        this.sex = sex
        this.name = name
        this.age = age
      }
        sleep(hours){
          console.log(`I sleep ${hours} hours`)
        }
    }
    let Violet = new Human('Violet', 39, 'female');
    Violet.sleep(8);

*/
//Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

  class Clock{
    constructor({template}){
        this.template = template;
    }
    render(){
        let date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
        }
    stop = function() {
      clearInterval(this.timer);
    };
  
    start = function() {
      this.render();
      this.timer = setInterval(()=>this.render(), 1000);
    };

  }
  // let clock = new Clock({template: 'h:m:s'});
  // clock.start();


  class Employee{ 
    #salary

    constructor(name, salary){
      this.name = name;
      this.#salary = salary
    }
     static  compare(a,b){
      return a.#salary-b.#salary;
    }

    get salary(){
      return `Salary is ${this.#salary}`
    }
    showInfo(){
      console.log(`Employee: ${this.name}`)
    }
  }

  class Manager extends Employee{
    constructor(name, salary, department){
      super(name, salary)
      this.department = department
    }
    showInfo(){
      super.showInfo();
      console.log(`From: ${this.department}`)
    }
  }