// Linear Search in Javascript
// In Linear Search , a value is searched in order of their indexes
// Search starts from index value 0 to the last index Value x.

var array = [12, 43, 2, 4, 11, 56, 88, 54, 88, 87, 23, 10];

// Here num is value to be searched
function linearSearch(num) {
  for (i = 0; i < array.length; i++) {
    if (num === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(12)); //returns 0
console.log(linearSearch(88)); //returns 6
console.log(linearSearch(88)); //returns 6

// ------------------------------------------------------------------------------------------------------------

// Binary Search in Javascript
// For Binary search , The given array should be Sorted Array.

var array1 = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(value, arr) {
  let leftmost = 0;
  let rightmost = arr.length;

  // This gives the middle Number of the array
  while (rightmost >= leftmost) {
    const middle = leftmost + Math.floor((rightmost - leftmost) / 2);
    if (value == arr[middle]) {
      return middle;
    }
    if (value < arr[middle]) {
      rightmost = middle - 1; // This statement makes leftmost to 0 and rightmost to 4 and loop goes on
    } else {
      leftmost = middle + 1; // This statement makes leftmost to 6 and rightmost to 10 and loop goes on
    }
  }
  return -1;
}

console.log(binarySearch(8, array1)); // returns 9 | + 1
console.log(binarySearch(5, array1)); // returns 6 | + 1
console.log(binarySearch(1, array1)); // returns 1
console.log(binarySearch(3, array1)); // returns 4
console.log(binarySearch(3, array1)); // returns 4

// ------------------------------------------------------------------------------------------------------------

// Linear 2
let doLinearSearch = function (array, targetValue) {
  for (let guess = 0; guess < array.length; guess++) {
    if (array[guess] === targetValue) {
      return guess;
    }
  }
  return -1;
};

let primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

let result = doLinearSearch(primes, 79);

console.log(result);

//vascospereira

// ------------------------------------------------------------------------------------------------------------

// Binary 2

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
let doBinarySearch = function (array, targetValue) {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (max >= min) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

let primes1 = [
  2, 6, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

let result1 = doBinarySearch(primes, 5);
console.log(result);

//vascospereira