  /*============================1=====================*/
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки
  
//   orderedItems.forEach(function (value) {
//     totalPrice += value;
//   }); 
  
  
//     // Пиши код выше этой строки
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
  /*============================2====================*/
//   function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach (number  => {
//       if (number > value){
//     filteredNumbers.push(number)
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

 /*============================3====================*/

//  function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach (firstArrayNumber => {
//     if (secondArray.includes(firstArrayNumber)) {
//       commonElements.push(firstArrayNumber);
//     }
//   });

//   return commonElements;

// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
/*============================4====================*/

// const calculateTotalPrice =(quantity, pricePerItem) => {

//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));

/*============================5====================*/
// В стрелочной функции после символа => идёт её тело. 
// Здесь может быть два варианта: с фигурными скобками и без них.
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return.
//  Это называется явный возврат (explicit return).
//  Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.
//  Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. 
//  Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.
// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, 
// но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));
/*============================6====================*/

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// ее рефакторинг
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

// orderedItems.forEach(item => totalPrice += item);
// return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

/*============================7====================*/
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// ее рефакторин

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number=>{
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
/*============================8====================*/

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// }

// ее рефакторин

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element =>{
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//   });

//   return commonElements;
// };
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

/*============================9====================*/
// function changeEven(numbers, value) {

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

//  ее рефакторинг

// const changeEven =  (numbers, value) => {
//   const newArray = [];
//   numbers.forEach (number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } 
//     else {
//       newArray.push(number);
//    }

//   });

// return newArray;

// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));

/*============================10====================*/
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsLengths = planets.map(planet=>planet.length);
// console.log(planetsLengths);

/*============================11====================*/
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const titles = books.map(book=>book.title);
// console.log(titles)
/*============================12====================*/

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки
// const  genres = books.flatMap((book) => book.genres);
// console.log(genres);

/*============================13====================*/
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // const getUserNames = users.map((user) => user.name);  
// //  console.log(getUserNames);

// const getUserNames = users => {
//  return  users.map((user) => user.name)
// };  
// console.log(getUserNames(users));

// В автопроверке у тебя в переменную getUserNames будет записываться функция, поэтому ты сначала передаешь аргумент-массив, 
// а потом уже пишешь тело функции users => users.map.
// А во втором варианте ты просто записываешь в переменную результат метода map над массивом

/*============================14====================*/
// const user = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUserEmails = users => {
//     return users.map(user=>user.email)
// };

// console.log(getUserEmails(user));

 /*============================15====================*/

//  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

//  const evenNumbers = numbers.filter(number => number % 2 === 0);
//  const oddNumbers = numbers.filter(number => number % 2 !== 0);
//  console.log(evenNumbers);
//  console.log(oddNumbers);

 /*============================16====================*/
//  const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];

// const allGenres = books.flatMap((book) => book.genres);
//  console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (genres,index,array)=> array.indexOf(genres) === index
//   );
//   console.log(uniqueGenres);

/*============================17====================*/
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';


// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.table(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.table(booksByAuthor);

/*============================18, 19, 20, 21,22, 23, 25 ====================*/
// const users= [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
// const getUsersWithEyeColor = (users, color) => {
//  return  users.filter(user => user.eyeColor === color);

// };
// console.table (getUsersWithEyeColor(users, 'blue'));

// const getUsersWithAge = (users, minAge, maxAge) => {
 
//   return  users.filter(user => user.age > minAge && user.age < maxAge);
// };
// console.table (getUsersWithAge(users, 30, 40));


// const getUsersWithFriend = (users, friendName) => {
//   return  users.filter(user => user.friends.includes(friendName));

// };
// console.table (getUsersWithFriend (users, 'Briana Decker'));


// const getFriends = (users) => {
//   return users.flatMap(user => user.friends).filter((friend,index,array)=> array.indexOf(friend) === index)
 
// };
// console.log (getFriends (users));

// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive === true)
// };
// console.table (getActiveUsers (users));

// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive !== true)
// };
// console.table (getInactiveUsers (users));

// const getUserWithEmail = (users, email) => {
//   return users.find (user => user.email === email)
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

/*============================24 ====================*/
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book=> book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book=> book.author === 'Роберт Шекли');
// console.log(bookWithTitle);
// console.log(bookByAuthor);

/*============================26====================*/