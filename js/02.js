


//     function checkPassword(password) {
//         const ADMIN_PASSWORD = "jqueryismyjam";
//         // Change code below this line
      
//         if (password === ADMIN_PASSWORD) {
//           return  "Welcome!";
//         } 
//           return "Access denied, wrong password!";
       
//       }
//   checkPassword("mangohackzor");
//   console.log(checkPassword("mangohackzor"));
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");

/*=====3====*/
       
// function checkStorage(available, ordered) {
          
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } 
    
//     if (ordered > available) {
//       return  "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
  
//     // Change code above this line
//   }

// checkStorage(100, 50);
// console.log( checkStorage(100, 50));
// checkStorage(100, 130);
// console.log( checkStorage(100, 130));
// checkStorage(70, 0);
// console.log( checkStorage(70, 0));
// checkStorage(200, 20);
// console.log( checkStorage(200, 20));
// checkStorage(200, 250);
// console.log( checkStorage(200, 250));
// checkStorage(150, 0);
// console.log( checkStorage(150, 0));

/*=====6====*/

// const fruits = ["apple", "plum", "pear", "orange"];
//  fruits[1] = "peach";
//  fruits[3] = "banana";
// console.log(fruits);

/*=====7 ====*/
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

/*=====8 ====*/
// const fruits  = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length-1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

/*=====9====*/
// function getExtremeElements(array) {
//     // Change code below this line
  
//   const newArray = [array[0], array[array.length-1]];
//   return newArray;
//     // Change code above this line
//   }
//   getExtremeElements([1, 2, 3, 4, 5]);
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
//   getExtremeElements(["Earth", "Mars", "Venus"]);
//   console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//   getExtremeElements(["apple", "peach", "pear", "banana"]);
//   console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

/*=====10====*/

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimeter);
//     // Change code above this line
//     return words;
//   }
  
//   splitMessage("Mango hurries to the train", " ");
//   console.log(splitMessage("Mango hurries to the train", " "));
//   splitMessage("Mango", "");
//   console.log(splitMessage("Mango", ""));
//   splitMessage("best_for_week", "_");
//   console.log(splitMessage("best_for_week", "_"));

/*=====11====*/


//   function calculateEngravingPrice(message, pricePerWord) {

//   const totalPrice = message.split(' ').length * pricePerWord;
//    return totalPrice;
//  }

//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

 /*=====12====*/
//  function makeStringFromArray(array, delimeter) {
//     let string;
//   string = array.join (delimeter);
//     return string;
//   }
//   console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//   console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//   console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

 /*=====13====*/
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. 
// В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// function slugify(title) {
//     // Change code below this line
//   return title.toLowerCase().split(' ').join('-')
//     // Change code above this line
//   }
  
//   console.log(slugify("Arrays for begginers"));
//   console.log(slugify("English for developer"));
//   console.log(slugify("Ten secrets of JavaScript"));
//   console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

 /*=====14====*/
//  Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. 
//  Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.
// Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2) ;
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);


 /*=====16====*/
//  function makeArray(firstArray, secondArray, maxLength) {
 
//  const totalArr = firstArray.concat(secondArray);

//   if (totalArr.length < maxLength){
//     return totalArr;
//   }
//    return totalArr.slice(0, maxLength);

//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) );
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

 /*=====18====*/
// function calculateTotal(number) {
//     // Change code below this line
//    let  total = 0;
//    for (let i = 1; i<= number; i+=1){ 
//        total +=i;
//    } 
//     return total;
//    }
        
//       console.log(calculateTotal(1));
        
//       console.log(calculateTotal(3));

 /*=====19====*/

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

 /*=====20====*/

// function calculateTotalPrice(order) {
//     let total = 0;

//   for (const priceOfItem of order) {
//     total += priceOfItem;
//   }

//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

 /*=====21====*/
// function findLongestWord(string) {
//   let arrString = string.split(' ');
//   let longestWord = arrString[0];
//   for (let i = 0; i < arrString.length; i += 1) {
//     if (arrString[i].length > longestWord.length) {
//       longestWord = arrString[i];      
//     }
// }
// return longestWord;
// }
// console.log(findLongestWord('Паразитическая оса Eretmocerus eremicus успешно применяется и демонстрирует высокую эффективность'));
  
 /*=====22====*/
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i +=1){
//     numbers.push(i);
// }
// return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

 /*=====23====*/
// function filterArray(numbers, value) {

//   const newArr = [];
// for (let i = 0; i < numbers.length; i+=1){
//  if (numbers[i] > value){
//   newarr.push(numbers[i]);
// }
// }
// return newArr;
//  // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));


 /*=====24====*/
//  function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

 /*=====25====*/
// function getCommonElements(array1, array2) {

// const commonArr = [];
  
//   for (let i = 0; i < array1.length; i+=1){
//        for (let j = 0; j < array2.length; j+=1){
//        if (array1[i] === array2[j]){
//                 commonArr.push(array1[i]);  
//                }
//       }
  
//   }
//  return commonArr;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Вариант 2

// function getCommonElements(array1, array2) {

//   const generalElements = [];
    
// for (const element of array1){
//    if (array2.includes(element)){
//     generalElements.push(element);  
//           }
//   }

// return generalElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

 /*=====26====*/
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const eachPrice of order) {
//     total += eachPrice;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

 /*=====27====*/
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

 /*=====28====*/

//  Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

// 5 % 1 = 0;
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1;
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2;
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1;
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0;
// //  5, разделенное на 5, равно 1, а остаток - 0

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(3 % 3);

/*=====29===*/
// function getEvenNumbers(start, end) {
   
//   const numbers = [];
//     for (let i = start; i <= end; i +=1){
//          if (i % 2 === 0){
//         numbers.push(i);
//          }
//    }
//    return numbers;
//     }
//     console.log(getEvenNumbers(2, 5));
//     console.log(getEvenNumbers(3, 11));
//     console.log(getEvenNumbers(8, 8));
//     console.log(getEvenNumbers(7, 7));

/*=====30===*/
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

/*=====31===*/

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//        return number;
//     }
//   }

// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

/*=====32===*/

// function includes(array, value) {
  
  
  // for (let i = 0; i < array.length; i+=1){
  //          if  (array[i] === value) {
  //            return true;
  //          }        
             
  //        } 
  //        return false; 
  //    }
  //    console.log(includes([1, 2, 3, 4, 5], 3));
  //    console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
