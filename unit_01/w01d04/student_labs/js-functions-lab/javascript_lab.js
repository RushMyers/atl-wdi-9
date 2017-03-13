//1
var maxOfTwoNumbers = function(numOne, numTwo) {
  if(numOne>numTwo) {
    numOne===largerNumber;
} else {
  numTwo===largerNumber;
}
}
maxOfTwoNumbers(4, 5);
//2
var maxOfThree = function (a, b, c) {
  if(a>b && a>c) {
    return a;
  } else if (b>a && b>c) {
      return b;
  } else {
    return c;
  }
};
//3 *
var isCharacterAVowel = function(character) {
  if (character === 'a'||'e'||'i'||'o'||'u') {
    return true;
  } else {
    return false;
  }
};
//4
function sumArray(array) {
  addedNumbers = 0;
  for(var i=0; i<array.length; i++) {
     addedNumbers = addedNumbers + array[i];
  }
  return addedNumbers;
}
var newArray = [3, 4, 5, 6, 7, 20];

//4-b

function multiplyArray(otherArray) {
  var multipliedNumbers = 1;
  for(var i=0;i<otherArray.length; i++) {
    multipliedNumbers*=otherArray[i];
  }
  return multipliedNumbers;
}
var newValues = [2, 3, 2];

//5
function reverseString (someString) {
 var newString='';
  for(var i=someString.length-1; i>=0; i--) {
    newString = newString+someString.charAt(i);
  }
  return newString;
}
//6
function reverseString (someString) {
 var newString='';
  for(var i=someString.length-1; i>=0; i--) {
    newString = newString+someString.charAt(i);
  }
  return newString;
}

//7

function findLongestWord(anArray) {
  var wordLength = 0;
  for(var i=0; i<anArray.length; i++) {
    if (anArray[i].length > wordLength) {
      wordLength = anArray[i].length;
    }
  }return wordLength;
}

var arrayOne = ['string', 'cheese', 'pizza', 'longwordssss'];

//8
function filterLongWords(arrayOfWords, i) {
  arrayOfWordsLongerThanI = [];

  }









