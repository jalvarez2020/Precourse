// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
    return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
    return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
    return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array

  for (let i = 0; i < arr.length; i++) {

    arr[i] = arr[i] + 1; 

  }

  return arr;

}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array

   arr.push(item);

  return arr;

 
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift

    arr.unshift(item);
  
      return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

  let sentance = '';

  for(let i = 0; i < words.length - 1; i++) {

      sentance = sentance + words[i] + ' ';
}
        sentance = sentance + words[words.length - 1];
          
            return sentance;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

  for(let i = 0; i <= arr.length; i++) {

    if(arr[i] === item) {

      return true;

    }
  
    else {

      return false;
    }
  } 
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value

  let sumNumbers = 0;
  
  for(let i = 0; i < numbers.length; i++) {

   sumNumbers = sumNumbers + numbers[i]; 

  }

  return sumNumbers;


}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

  let average = 0;

    for(let i = 0; i < testScores.length; i++) {
        average = average + testScores[i];    
    }

    average = average / testScores.length;

    return average;


}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

 numbers = numbers.sort(function(a, b) {
    return a - b;
  });
      return numbers[numbers.length - 1];
}
  


// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
};
