

/*=====6=====*/
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);


// Функция add должна уметь складывать три числа и выводить результат в консоль. 
// Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// function add(a, b, c) {
//   console.log(`"Addition result equals ${a + b + c}"`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/*=====9=====*/
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
// return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

/*=====10=====*/
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", 
// где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//    const message =  `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

/*=====11====*/

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };
// calculateTotalPrice(5, 100);
// console.log ("Total price=", calculateTotalPrice(5, 100))
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

/*=====12====*/

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price`;
// //   return message;
// // }
// makeOrderMessage(2, 100, 50);
// console.log (makeOrderMessage(2, 100, 50));
// makeOrderMessage(4, 300, 100);
// console.log (makeOrderMessage(4, 300, 100));
// makeOrderMessage(10, 70, 200);
// console.log (makeOrderMessage(10, 70, 200));

/*=====13====*/
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// isAdult(20);
// console.log (isAdult(20));
// isAdult(14);
// isAdult(8);
// isAdult(37);

/*=====14====*/
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }
// isValidPassword("mangodab3st");
// console.log(isValidPassword('mangodab3st'));
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam")

/*=====15====*/
// function checkAge(age) {
//   let message;
//   if (age >= 18) { // Change this line
//     message = 'You are adult';
//     console.log(age,'-', message);
//   } else {
//     message = 'You are minor';
//     console.log(age, '-', message);
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

/*=====16====*/
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. 
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available){
//     message = 'Not enough goods in stock!';

//   } else if (ordered <= available){
//     message ='Order is processed, our manager will contact you.';
//   }
//   return message;
// }
// checkStorage(100, 50);
// console.log(checkStorage(100, 50));
// checkStorage(100, 130);
// console.log(checkStorage(100, 130));
// checkStorage(200, 20);
// console.log(checkStorage(200, 20));
// checkStorage(200, 150);
// console.log(checkStorage(200, 150));

/*=====18====*/
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   console.log('Price Per Droid: ', pricePerDroid);
//   console.log('Ordered Quantity ', orderedQuantity);
// const totalPrice = pricePerDroid * orderedQuantity;
//   if(customerCredits < totalPrice){
//     return message = 'Insufficient funds!';
//   }
//   return message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
// }
// makeTransaction(3000, 5, 23000);
// console.log( makeTransaction(3000, 5, 23000));
// makeTransaction(1000, 3, 15000);
// console.log(makeTransaction(1000, 3, 15000));
// makeTransaction(5000, 10, 8000);
// console.log(makeTransaction(5000, 10, 8000));
// makeTransaction(2000, 8, 10000);
// console.log(makeTransaction(2000, 8, 10000));

/*=====19====*/
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// checkPassword("mangohackzor");
// console.log(checkPassword("mangohackzor"));
// checkPassword(null);
// console.log(checkPassword(null));
// checkPassword("polyhax");
// console.log(checkPassword("polyhax"));
// checkPassword("jqueryismyjam");
// console.log(checkPassword("jqueryismyjam"));

/*=====20====*/
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start &&  number <= end; // Change this line

//   return isInRange;
// }
//  isNumberInRange(10, 30, 17);
//  console.log( isNumberInRange(10, 30, 17));
//  isNumberInRange(10, 30, 5);
//  isNumberInRange(20, 50, 24);
//  isNumberInRange(20, 50, 76);

/*=====24====*/

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent>=50000){
//   discount = GOLD_DISCOUNT;
// } else if(totalSpent >= 20000 && totalSpent < 50000){
//  discount = SILVER_DISCOUNT;
// } else if(totalSpent >= 5000 && totalSpent < 20000){
//  discount = BRONZE_DISCOUNT;
// } else if (totalSpent < 5000){
//  discount = BASE_DISCOUNT;
// }
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300); 
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);  

/*=====25====*/
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ?
//      "Not enough goods in stock!" :
//     "The order is placed, the manager will contact you";
//   return message;
// }
// checkStorage(100, 50);
// console.log(checkStorage(100, 50));
// checkStorage(100, 130);
// console.log(checkStorage(100, 130));
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

/*=====26====*/

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// getSubscriptionPrice("professional");
// console.log('Цена подписки: ', getSubscriptionPrice("professional"));
// getSubscriptionPrice("organization");
// console.log('Цена подписки: ', getSubscriptionPrice("organization"));
// getSubscriptionPrice("starter");
// console.log('Цена подписки: ', getSubscriptionPrice("starter"));

/*=====27====*/

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// switch (password) {
//   case password = null:  
//     message = "Canceled by user!";
//     break;
    
//   case password = ADMIN_PASSWORD:
//    message = "Welcome!";
//    break;
    
//   default:
//     message = "Access denied, wrong password!";
//   }
  
//   return message;
// }

// checkPassword("mangohackzor");
// console.log(checkPassword("mangohackzor"));
// checkPassword(null);
// console.log(checkPassword(null));
// checkPassword("polyhax");
// console.log(checkPassword("polyhax"));
// checkPassword("jqueryismyjam");
// console.log(checkPassword("jqueryismyjam"));

/*=====29====*/
// function getShippingCost(country) {
//   let message;
  
// switch (country) {
//   case country = 'China':  
//     message = `Shipping to ${country} will cost 100 credits`;
//     break;
    
//   case country = 'Chile':  
//     message = `Shipping to ${country} will cost 250 credits`;
//     break;
    
//   case country = 'Australia':  
//     message = `Shipping to ${country} will cost 170 credits`;
//     break;
    
//   case country = 'Jamaica':  
//     message = `Shipping to ${country} will cost 120 credits`;
//     break;
    
//   default:
//     message = "Sorry, there is no delivery to your country";
//   }
  
//   return message;
// }
// getShippingCost("Australia");
// console.log(getShippingCost("Australia"));
// getShippingCost("Germany");
// console.log(getShippingCost("Germany"));
// getShippingCost("China");
// console.log(getShippingCost("China"));
// getShippingCost("Chile");
// console.log(getShippingCost("Chile"));
// getShippingCost("Jamaica");
// console.log(getShippingCost("Jamaica"));
// getShippingCost("Sweden");
// console.log(getShippingCost("Sweden"));

/*=====30====*/
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }
// getNameLength("Poly");
// console.log(getNameLength("Poly"));
// getNameLength("Harambe");
// console.log(getNameLength("Harambe"));
// getNameLength("Billy");
// console.log(getNameLength("Billy"));
// getNameLength("Joe");
// console.log(getNameLength("Joe"));

// /*=====31====*/
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;

// const firstElement = courseTopic[0];

// const lastElement = courseTopic[courseTopic.length-1];

// /*=====32====*/
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// getSubstring("Hello world", 3);
// console.log(getSubstring("Hello world", 3));
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

 /*=====33====*/

// function formatMessage(message, maxLength) {
//   let result;
//  if (message.length <= maxLength){
//    result = message;
//  } else {
//    result = message.slice(0, maxLength) + '...';
//  }
  
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// console.log(formatMessage("Curabitur ligula sapien", 16));
// formatMessage("Curabitur ligula sapien", 23);
// console.log(formatMessage("Curabitur ligula sapien", 23));
// formatMessage("Vestibulum facilisis purus nec", 20);
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// formatMessage("Vestibulum facilisis purus nec", 30);
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

 /*=====34====*/
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// normalizeInput("Hello world");
// console.log(normalizeInput("Hello world"));
// normalizeInput("This ISN'T SpaM");
// console.log(normalizeInput("This ISN'T SpaM"));
// normalizeInput("Big SALE")
// console.log(normalizeInput("Big SALE"));

 /*=====35====*/
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//    return result;
//  }
//  checkForName("Egor Kolbasov", "Egor");
//  console.log(checkForName("Egor Kolbasov", "Egor"));
//  checkForName("Egor Kolbasov", "Zhenya")
//  console.log(checkForName("Egor Kolbasov", "Zhenya"));

/*=====36====*/
// function checkForSpam(message) {
//   let result;

//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

//   return result;
// }
// // checkForSpam("Latest technology news");
// // console.log(checkForSpam("Latest technology news"));
// // checkForSpam("JavaScript weekly newsletter");
// // console.log(checkForSpam("JavaScript weekly newsletter"));
// // checkForSpam("Get best sale offers now!");
// // console.log(checkForSpam("Get best Sale offers now!"));

// function checkForSpam(message) {
//   let result;
//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')?
//      true :  false;
//   return result;
// }
// checkForSpam("Latest technology news");
// console.log(checkForSpam("Latest technology news"));
// checkForSpam("JavaScript weekly newsletter");
// console.log(checkForSpam("JavaScript weekly newsletter"));
// checkForSpam("Get best sale offers now!");
// console.log(checkForSpam("Get best Sale offers now!"));
