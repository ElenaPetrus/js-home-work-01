/*=============================1=====================*/
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

/*=============================2=====================*/
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

/*=============================3=====================*/
// function Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// };

// const myCar = new Car('Audi', 'Q3', 36000);
// console.log(myCar);
/*=============================4=====================*/
// function Car({brand, model, price} ={}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

/*=============================5=====================*/
// В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором.
//  Методы в prototype будут вызываться объектами созданными функцией-конструктором, 
//  поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.
// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//    Car.prototype.getPrice = function(){
//      return this.price;
//    };
//    Car.prototype.changePrice = function(newPrice){
//      this.price = newPrice;
//    };
//   console.log(Car.prototype.hasOwnProperty('getPrice'));
//   console.log(Car.prototype.hasOwnProperty('changePrice'));
  
//   const Car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
//   console.log(Car1);

//   Car1.changePrice(35000);
//   console.log(Car1);

//   console.log(Car1.getPrice());

/*=============================6=====================*/
// function Storage (items){
//     this.items = items;
// }

// Storage.prototype.getItems = function() {
//     return this.items;
//   };

// Storage.prototype.addItem = function(newItem) {
//     // for (const item of this.items) {
//     //     if (this.items.includes.newItem) {
//     //     return console.log('${newItem} is already in the Strorage');
//     //     };
//         this.items.push(newItem);
//     // }; 
//   };

// Storage.prototype.removeItem = function(itemToRemove) {

//     //     if (this.items.indexOf(itemToRemove) === -1) {
//     //       return console.log(`${itemToRemove} is not in the Strorage`);
//     //     }
//     //    this.items.splice(this.items.indexOf(itemToRemove),1);

    //     for (let i = 0; i < this.items.length; i++) {
    //       if (this.items[i] === itemToRemove) {
    //         return this.items.splice(i, 1);
    //       }
    //       return console.log(`${itemToRemove} is not in the Strorage`);
    //     }
    //   };



// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);

// console.log (Storage.prototype.hasOwnProperty('getItems'));
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// console.log (Storage.prototype.hasOwnProperty('addItem'));
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

// console.log (Storage.prototype.hasOwnProperty('removeItem'));
// storage.removeItem('Понгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

/*=============================7=====================*/

// function StringBuilder (baseValue){
//     this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function(value) {
//         return this.value;
//       };
      
// StringBuilder.prototype.padStart = function(str) {
//         return this.value = str + this.value;
//       };

// StringBuilder.prototype.padEnd = function(str) {
//         return this.value +=str;
//       };
// StringBuilder.prototype.padBoth= function(str) {
//         return  this.value = str + this.value + str;
//       };

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'

// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

/*=============================9=====================*/
// class Car {

//     constructor ({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     }
/*============================10=====================*/

// // Рефакторинг задачи 5 
// // Добавь классу Car две метода.
// // getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// // changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }

//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//     this.price = newPrice;
//   }
// }
//   console.log(Car.prototype.hasOwnProperty('getPrice'));
//   console.log(Car.prototype.hasOwnProperty('changePrice'));
    
//   const Car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
//    console.log(Car1);
//   Car1.changePrice(35000);
//   console.log(Car1);
  
//   console.log(Car1.getPrice());
/*============================11=====================*/
// class Car {
//     #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//   getBrand(){
//     return  this.#brand;
//   }
    
//    changeBrand(newBrand){
//      this.#brand = newBrand;
//    } 
//   }
//   const Car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
//   console.log(Car1);
//   console.log(Car1.getBrand());
//   Car1.changeBrand('Honda');
//   console.log(Car1);
//   console.log(Car1.getBrand());
/*============================12=====================*/
// // Рефакторинг задачи 6 через классы
// class Storage {
//     #items
//     constructor(items){
//     this.#items = items;
//      }
  
//   getItems() {
//     return this.#items;
//   }
  
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
  
//   removeItem  (item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
//   };
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);

// console.log (Storage.prototype.hasOwnProperty('getItems'));
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// console.log (Storage.prototype.hasOwnProperty('addItem'));
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

// console.log (Storage.prototype.hasOwnProperty('removeItem'));
// storage.removeItem('Понгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
/*============================13=====================*/
// Рефакторинг задачи 8 через классЫ

// class StringBuilder {
//     #value
//     constructor (baseValue){
//     this.#value = baseValue;
//     }
  
  
//   getValue () {
//     return this.#value;
//   }
  
//   padEnd (str) {
//     this.#value += str;
//   }
  
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
  
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
//   };
//   const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'

// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
/*============================14=====================*/
// // Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный интерфейс. 
// // Для работы со свойством которое хранит массив или объект они не подойдут.
// // Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение. 
// // Геттер и сеттер идут в паре и должны называться одинаково.

// class Car {
//     #model;
//     #price;
//     #brand;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }
  /*============================15=====================*/

//   class Car {

//     static MAX_PRICE = 50000;
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       if (newPrice <= Car.MAX_PRICE) {
//       return this.#price = newPrice;
//     }
//   }
// }
  
//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

  /*============================16=====================*/
       

  // class Car {
  //   static #MAX_PRICE = 50000;
  // // static checkPrice(price){
  // //   if (price > Car.#MAX_PRICE ){
  // //     return 'Внимание! Цена превышает допустимую.'
  // //   }
  // //     return 'Всё хорошо, цена в порядке.'
  // // }
  // static checkPrice(price){
  //   return price > Car.#MAX_PRICE ? 'Внимание! Цена превышает допустимую.': 'Всё хорошо, цена в порядке.';
  //   }
  
  //   constructor({ price }) {
  //     this.price = price;
  //   }
  // }
  
  // const audi = new Car({ price: 36000 });
  // const bmw = new Car({ price: 64000 });
  
  // console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
  // console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
  /*============================17=====================*/

//   class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User{
//     static  AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
//   }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);
  /*============================18=====================*/
//   class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
 
//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };
//     accessLevel;
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }

//   }
  
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
  
//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser
  /*============================19=====================*/
//   class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Пиши код ниже этой строки
//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };
//     blacklistedEmails;
//     accessLevel;
  
//     constructor({ email, accessLevel, blacklistedEmails=[] }) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = blacklistedEmails;
//     }
//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email){
//         if ( this.blacklistedEmails.includes(email)){
//         return true;
//         }
//         return false;
//     }
  
//     // Пиши код выше этой строки
//   }
  
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
  
//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser
//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // 'poly@mail.com'
//   console.log(mango.isBlacklisted('mango@mail.com')); //  false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true 