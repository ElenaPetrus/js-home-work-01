


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
//   console.log( calculateTotalPrice([412, 371, 94, 63, 176]));

function findLongestWord(string) {
  let arrString = string.split(' ');
  let longestWord = arrString[0];
  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i].length > longestWord.length) {
      longestWord = arrString[i];      
    }
}
return longestWord;
}

  