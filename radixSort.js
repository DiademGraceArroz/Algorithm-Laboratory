function radixSort(arr) {
  const radix = 26; // number of lowercase letters in the English alphabet
  const maxLength = getMaxStringLength(arr); // get the length of the longest string in the array

  // iterate over the digits of the strings starting from the rightmost digit
  for (let i = maxLength - 1; i >= 0; i--) {
    // create an array of buckets for each lowercase letter
    const buckets = Array.from({ length: radix }, () => []);

    // place each string into the correct bucket based on the current digit
    for (let j = 0; j < arr.length; j++) {
      const charIndex = getCharIndex(arr[j], i);
      buckets[charIndex].push(arr[j]);
    }

    // flatten the buckets into a new array in the order of the lowercase letters
    arr = [].concat(...buckets);
  }

  return arr;
}

// helper function to get the length of the longest string in the array
function getMaxStringLength(arr) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

// helper function to get the index of the lowercase letter at a certain position of a string
function getCharIndex(str, position) {
  const charCodeA = "a".charCodeAt(0);
  const charCode = str.charCodeAt(position);
  return charCode - charCodeA;
}

const givenArr = ['hello', 'world', 'apple', 'banana', 'cat', 'dog'];
console.log(radixSort(givenArr)); // ['apple', 'banana', 'cat', 'dog', 'hello', 'world']
