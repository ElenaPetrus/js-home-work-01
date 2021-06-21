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

/*============================18, 19, 20, 21,22, 23, 25, 27, 29, 32, 38, 39, 40 ====================*/
const users= [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]
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


// const isEveryUserActive = (users) => {
//    return users.every (user => user.isActive === true)
// };
// console.log (isEveryUserActive(users));


// const isAnyUserActive = users => {
//    return users.some (user => user.isActive === true)
// };
// console.log (isAnyUserActive(users));


// const calculateTotalBalance = users=> {
//   return users.reduce((totalBalance, user) => {
//    return totalBalance+user.balance;
// }, 0);
// };
// /*============================var 2 ====================*/
// // const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance += user.balance, 0);
// /*============================ end var 2 ===============*/
// console.log (calculateTotalBalance(users));

// // Дополни функцию getTotalFriendCount(users) так, 
// // чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// const getTotalFriendCount = users =>  users.reduce ( (totalFriend, user)=>[...totalFriend, ...user.friends], []).length;
// console.log(getTotalFriendCount(users));

// const sortByAscendingBalance = users => [...users].sort((a,b)=> a.balance -b.balance);
// console.table(sortByAscendingBalance(users));

// // Дополни функцию sortByDescendingFriendCount(users) так, 
// // чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// const sortByDescendingFriendCount = users => [...users].sort((a,b)=> b.friends.length - a.friends.length);
// console.log(sortByDescendingFriendCount(users));


// const sortByName = users => [...users].sort((a,b)=> a.name.localeCompare(b.name));
// console.log(sortByName(users));


// // Дополни функцию getNamesSortedByFriendCount(users) так, 
// // чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// const getNamesSortedByFriendCount = users => [...users]
// .sort((a,b)=> a.friends.length-b.friends.length)
// .map(user=>user.name)
// console.log(getNamesSortedByFriendCount(users));


// // Дополни функцию getSortedFriends(users) так, 
// // чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// const getSortedFriends = users => [...users]
// .flatMap(user => user.friends)
// .filter((friend,index,array)=> array.indexOf(friend) === index)
// .sort((a, b)=>a.localeCompare(b));

// console.log(getSortedFriends(users));



// Дополни функцию getTotalBalanceByGender(users, gender) так, 
// чтобы она возвращала общий баланс пользователей (свойство balance), 
// пол которых (свойство gender) совпадает со значением параметра gender.
const getTotalBalanceByGender = (users, gender) => [...users]
.filter(user => user.gender === gender)
.reduce((totalBalance, user) => totalBalance+user.balance, 0)
console.log(getTotalBalanceByGender(users, 'male'));

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
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(number=>number%2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number=>number%2 !== 0);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// const eachElementInSecondIsEven = secondArray.every(number=>number%2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number=>number%2 !== 0);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// const eachElementInThirdIsEven = thirdArray.every(number=>number%2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number=>number%2 !== 0);console.log(eachElementInFirstIsEven);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
/*============================28====================*/
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(number=>number%2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number=>number%2 !== 0);
// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// const anyElementInSecondIsEven = secondArray.some(number=>number%2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number=>number%2 !== 0);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// const anyElementInThirdIsEven = thirdArray.some(number=>number%2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number=>number%2 !== 0);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

/*============================30====================*/

// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». 
// В повседневных задачах его применение сводится к работе с числами.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, number)=>{
//   return acc+number;
// });

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
/*============================31====================*/

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки
     
// const totalAveragePlaytimePerGame = players.reduce ((total,player)=>{
// return total + player.playtime/player.gamesPlayed;

// }, 0);

// console.log(totalAveragePlaytimePerGame);


/*============================34====================*/

// // Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// // Сортирует и изменяет исходный массив.
// // Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// // По умолчанию сортирует по возрастанию.
// // Сравнение происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
// // Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных коллекций на базе исходной. 
// // Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию.
// //  Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

/*============================35====================*/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort ((a,b)=>a-b);
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort ((a,b)=>b-a);
// console.log(descendingReleaseDates);

/*============================36====================*/

// // Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().
// // firstString.localeCompare(secondString)
// // Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).
// // Возвращает отрицательное значение если firstString должна быть перед secondString.
// // Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// // Если строки одинаковы, возвращается ноль.
// // Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт'
// ];

// const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
// console.table(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
// console.table(authorsInReversedOrder);

/*============================37====================*/
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// // const sortedByAuthorName = books.sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// // console.table(sortedByAuthorName);

// // const sortedByReversedAuthorName = books.sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// // console.table(sortedByReversedAuthorName);

// // const sortedByAscendingRating = books.sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// // console.table(sortedByAscendingRating);

// // const sortedByDescentingRating = books.sort((firstBook, secondBook) => secondBook.rating- firstBook.rating);
// // console.table(sortedByDescentingRating);

// /*=======вариант 2 ===========*/

// const sortedByAuthorName = [...books].sort ((a,b)=>a.author.localeCompare(b.author));
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort ((a,b)=>b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort ((a,b)=> a.rating -b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort ((a,b)=> b.rating - a.rating);
// console.log(sortedByDescentingRating);


// /*=======чтобы выводил отсортированных авторов в массив===========*/

// // const sortedByAuthorName = books.flatMap(book => book.author)
// // .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
// // console.log(sortedByAuthorName);

// // const sortedByReversedAuthorName = books.flatMap(book => book.author)
// // .sort((firstBook, secondBook) => secondBook.localeCompare(firstBook));
// // console.log(sortedByReversedAuthorName);

/*============================41====================*/

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;


// const names = [...books]
// .filter (book=>book.rating>MIN_BOOK_RATING)
// .map(book=>book.author)
// .sort((a, b)=> a.localeCompare(b));

// console.log(names);