//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
    var arr = ['apples', 'oranges', 'bananas']; 

   var lengths = function(arrayOfStrings) { 
     var arrayOfNumbers = []; 
     for(i=0; i<arrayOfStrings.length: i++) { 
       var lengthOfStrings = [i]length; 
       
     } 
     return arrayOfNumbers; 
   } 
    lengths(arr); 
   
   

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// 

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// function wordReverse(anyString) { 
    function wordReverse (stringToReverse) { 
  var arrayOfWords = stringToReverse.split(''); 
  var reversedWords = []; 
  reversedWords=arrayOfWords.reverse(); 
  return reversedWords.join(''); 
}
//Or: 

function wordReverse (stringToReverse) { 
  var arrayOfWords = stringToReverse.split(''); 
  
  var reversedWords = arrayOfWords.reverse(); 
  
  return reversedWords.join(''); 
} 

someString = "I've got a lovely bunch of coconuts"; 

wordReverse(someString); 
