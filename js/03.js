// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   /*
//    * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//    * Первый элемент это ключ свойства, второй это значение.
//    */
//   const entries = Object.entries(hotel);
//   /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
  
//     console.log(`${key}: ${value}`);
//   }

/*=====2=========================================*/
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],

// owner: {
// name:"Henry",
// phone: "982-126-1588",
// email: "henry.carter@aptmail.com", 
// },
// };

/*=====4==========================================*/
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[numberOfTags-1];
// console.log(lastTag);

/*=====5==========================================*/

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
/*=====6==========================================*/
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push('trusted');

/*=====7==========================================*/
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// apartment.area= 60;
// apartment.rooms= 3;
// apartment.location = {};
// apartment.location.country= "Jamaica";
// apartment.location.city = "Kingston";

/*=====9==========================================*/
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
  
  
//   // Change code above this line
// };
/*=====10==========================================*/
// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//  console.log(keys);
//       values.push(apartment[key]);
//   console.log(apartment[key]);
// }

/*=====11==========================================*/

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = 'Манго';
  
//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

// Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. 
// Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, 
// хотя его нет в объекте dog - это несобственное свойство из объекта animal.

// Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. 
// Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства.
//  Для того чтобы узнать есть в объекте собственное свойство или нет, 
//  используется метод hasOwnProperty(key), который возвращает true или false.

// const keys = [];
// const values = [];

// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);

//   console.log(key);
//   console.log(apartment[key]);
//  }

// }
/*=====12==========================================*/
// function countProps(object) {
//     let propCount = 0;
  
//   const keys = Object.keys(object);
//     // console.log(keys);
//     // console.log(object[key]);  
    
//     return propCount = keys.length;
//   }

//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

 /*=====13==========================================*/ 
// const apartment = {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }
// console.log(values);

 /*=====15==========================================*/ 
// const apartment = {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   console.log(keys);
//   console.log(values);
  
 /*=====16==========================================*/ 
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     for (const value of values){
//         totalSalary += value;
//   }
//   return totalSalary;
// }
//   console.log(countTotalSalary({}));
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);
 /*=====18==========================================*/ 
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products){
//     if (productName === product.name){
//       return product.price;
//       continue;
//     }

//     }
//     return null;
    
//   }
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Droid"));
//   console.log(getProductPrice("Engine"));
 /*=====19==========================================*/ 
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//    const  listPropNames = [];
//    for (const product of products){

//      if (product.hasOwnProperty(propName)){
//         listPropNames.push(product[propName]);
//      }
    
//     }
//     return listPropNames;
//   }
//  console.log(getAllPropValues("name"));

 /*=====20==========================================*/ 
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName){
//     let totalPrice =  0;
//    for (const product of products){
//   console.log(product);
//      if (product.name === productName){
//       totalPrice= product.price * product.quantity;

//     }
//   }
//   return totalPrice;
// }

//  console.log(calculateTotalPrice("Blaster"));
//  console.log(calculateTotalPrice("Radar"));
//  console.log(calculateTotalPrice("Droid"));
//  console.log(calculateTotalPrice("Grip"));
//  console.log(calculateTotalPrice("Scanner"));

  /*=====21-22==========================================*/ 

  // const highTemperatures = {
  //   yesterday: 28,
  //   today: 26,
  //   tomorrow: 33,
  // };
  
//   const {
//   yesterday, 
//   today, 
//   tomorrow, 
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

//   // const meanTemperature = (yesterday + today + tomorrow) / 3;
//   // console.log(meanTemperature );

  /*=====23==========================================*/ 
  // const highTemperatures = {
  //   yesterday: 28,
  //   today: 26,
  //   tomorrow: 33,
  // };

  // const {
  //   yesterday: highYesterday, 
  //   today: highToday, 
  //   tomorrow: highTomorrow, 
  //   icon: highIcon  = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  // } = highTemperatures;

  // const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

  // console.log(meanTemperature );
 /*=====24==========================================*/ 
  // const colors = [
  //   { hex: '#f44336', rgb: '244,67,54' },
  //   { hex: '#2196f3', rgb: '33,150,243' },
  //   { hex: '#4caf50', rgb: '76,175,80' },
  //   { hex: '#ffeb3b', rgb: '255,235,59' },
  // ];
  
  // const hexColors = [];
  // const rgbColors = [];
  // // Change code below this line
  
  // for (const {rgb, hex} of colors) {
  //   hexColors.push(hex);
  //   rgbColors.push(rgb);
  // }
  // console.log(hexColors);
  // console.log(rgbColors);
 /*=====25==========================================*/ 
//  const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };


// const {
// today: {
//   low: lowToday,
//   high: highToday,
//   todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// },

// tomorrow: {
// low: lowTomorrow,
// high: highTomorrow, 
// tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204355.svg",
// }

// } = forecast;

// console.log(lowToday, highToday, todayIcon);

   /*=====26==========================================*/

// function calculateMeanTemperature(forecast) {
  
//   const{
//     today: {low:todayLow, high:todayHigh},
//     tomorrow: {low:tomorrowLow, high:tomorrowHigh},
//   } = forecast;
  
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

   /*=====27==========================================*/
//    const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

   /*=====28==========================================*/
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore =  Math.min(...allScores);
 /*=====30==========================================*/

//  function makeTask(data) {
//    const completed = false;
//    const category = 'General';
//    const priority = 'Normal';
//    // Change code below this line
//  const UpdateData = {completed, category, priority, ...data};
//    return UpdateData;
//    // Change code above this line
//  }
//  console.log (makeTask({}));
//  console.log (makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
//   console.log (makeTask({ category: "Finance", text: "Take interest" }));
//   console.log (makeTask({ priority: "Low", text: "Choose shampoo" }));
//   console.log (makeTask({ text: "Buy bread" }));

   /*=====31==========================================*/
   // function add(...args) {
  
   //    console.log(args);
   //    let total = 0;
    
   //    for (const arg of args) {
   //      total += arg;
   //    }
    
   //    return total;
   //  };

   //  console.log(add(74, 11, 62, 46, 12, 36));
      /*=====32==========================================*/
      // function addOverNum(fistNumber,...args) {
      //    let total = 0;
       
      //    for (const arg of args) {
      //      if (arg > fistNumber) {
      //      total += arg;
      //    }
      //    }
       
      //    return total;
   
      //  }
   /*=====33==========================================*/

//    function findMatches(array,...args) {
//       const matches = []; 
//    //  for (const element of array) {
//    //      if (args.includes(element)) {
//    //        matches.push(element);
//    //      }
//    //    }

//    for (let i = 0; i < args.length; i += 1) {
//       if (array.includes(args[i])) {     
//           matches.push(args[i]);
//       }
//       }
//       // Change code above this line
//       return matches;
//     }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); 
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); 
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); 
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


   /*=====34==========================================*/
   // const bookShelf = {
   //    // Change code below this line
   //    books: ['The last kingdom', 'The guardian of dreams'],
   //    getBooks() {
   //      return 'Returning all books';
   //    },
   //    addBook(bookName) {
   //      return `Adding book ${bookName}`;
   //    },
   //    removeBook(bookName){
   //      return `Deleting book ${bookName}`;
   //    },
   //    updateBook(oldName, newName) {
   //      return `Updating book ${oldName} to ${newName}`
   //    },
       
   //    // Change code above this line
   //  };
   //  console.log(bookShelf.addBook('Haze'));
   //  console.log(bookShelf.removeBook("Red sunset"));

     /*=====35==========================================*/
   //   Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. 
   //   Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
   // const bookShelf = {
   //    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
   //    updateBook(oldName, newName) {
   //      // Change code below this line
       
   //  const bookArr = this.books.indexOf(oldName);
   //      this.books.splice(bookArr, 1, newName);
      
     
   //    },
   //  };
   //  bookShelf.updateBook('Haze', 'Dungeon chronicles');
   //  console.log(bookShelf);
   // bookShelf.updateBook("The last kingdom", "Dune");
   // console.log(bookShelf);

       /*=====36==========================================*/
      //  К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. 
      //  Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

      //  const atTheOldToad = {
   
      //  potions:[]
         
      //  };

    /*=====37==========================================*/
      // const atTheOldToad = {
      //    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
      //     getPotions(){
      //       return this.potions;
      //     },
      //  };
      //  console.log(atTheOldToad.getPotions());

   /*=====38==========================================*/
   // const atTheOldToad = {
   //    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
   //    addPotion(potionName) {
   //      this.potions.push(potionName);
   //      return this.potions;
   
   //    },
   //  };
   
   //    console.log(atTheOldToad.addPotion('Invisibility'));
   //    console.log(atTheOldToad.addPotion('Power potion'));
   /*=====39==========================================*/

   // this.potions.splice(this.potions.indexOf(potionName), 1);

   /*=====40==========================================*/

   // const atTheOldToad = {
   //    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
   //    updatePotionName(oldName, newName) {

   //   const potionArr = this.potions.indexOf(oldName);
   //         this.potions.splice(potionArr, 1, newName);

   //         return this.potions;

   //    },
  
   //  };
    
   // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
 
   /*=====41==========================================*/
   // Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

   const atTheOldToad = {
      potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
      ],
      // Change code below this line
      getPotions() {
        return this.potions;
      },
      // addPotion(potionName) {
      //   if (this.potions.includes(potionName)) {
      //     return `Potion ${potionName} is already equipped!`;
      //   }
      addPotion(potionName) {
         const { potions } = this;
         const { name } = potionName;
         for (let i = 0; i < potions.length; i += 1) {
           if (potions[i].name === name) {
             return `Potion ${name} is already equipped!`;
           }
           potions.push(potionName);
         }
       },
      // removePotion(potionName) {
      //   const potionIndex = this.potions.indexOf(potionName);
    
      //   if (potionIndex === -1) {
      //     return `Potion ${potionName} is not in inventory!`;
      //   }
    
      //   this.potions.splice(potionIndex, 1);
      // },
      removePotion(potionName) {
         const { potions } = this;
         for (let i = 0; i < potions.length; i += 1) {
           if (potions[i].name === potionName) {
             potions.splice(i, 1);
             return potions;
           }
         }
         return `Potion ${potionName} is not in inventory!`;
       },

      // updatePotionName(oldName, newName) {
      //   const potionIndex = this.potions.indexOf(oldName);
    
      //   if (potionIndex === -1) {
      //     return `Potion ${oldName} is not in inventory!`;
      //   }
    
      //   this.potions.splice(potionIndex, 1, newName);
      // },
      updatePotionName(oldName, newName) {
         const { potions } = this;
         for (let i = 0; i < potions.length; i += 1) {
           if (potions[i].name === oldName) {
             potions[i].name = newName;
             return potions;
           }
         }
         return `Potion ${oldName} is not in inventory!`;
       },

    };

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); 
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
