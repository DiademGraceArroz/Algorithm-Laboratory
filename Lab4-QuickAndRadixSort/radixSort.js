import { radixData } from "./radixSortData.js";

// Helper function to get the character at a specific index of a string
function getChar(string, index) {
  // If the index is out of range, return 0
  if (index >= string.length) {
    return 0;
  }
  return string.charCodeAt(index);
}

// Radix sort implementation for an array of strings
function radixSort(strings) {
  const radix = 26; // Number of lowercase letters (a-z)

  // Find the maximum length of strings in the array
  let maxLength = 0;
  for (let i = 0; i < strings.length; i++) {
    maxLength = Math.max(maxLength, strings[i].length);
  }

  // Perform counting sort for each character from right to left
  for (let i = maxLength - 1; i >= 0; i--) {
    const count = new Array(radix).fill(0);
    const sortedStrings = new Array(strings.length);

    // Count the occurrences of each character at the current index
    for (let j = 0; j < strings.length; j++) {
      const char = getChar(strings[j], i);
      count[char]++;
    }

    // Calculate the cumulative count
    for (let j = 1; j < radix; j++) {
      count[j] += count[j - 1];
    }

    // Build the sorted array based on the current character
    for (let j = strings.length - 1; j >= 0; j--) {
      const char = getChar(strings[j], i);
      sortedStrings[count[char] - 1] = strings[j];
      count[char]--;
    }

    // Update the original array with the sorted strings
    for (let j = 0; j < strings.length; j++) {
      strings[j] = sortedStrings[j];
    }
  }

  return strings;
}

// Randomize an array using Fisher-Yates shuffle algorithm
function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Example usage
const array = radixData.slice(); // Create a copy of the radixData array
const randomizedArray = randomizeArray(array);
console.log(randomizedArray);
const sortedArray = radixSort(randomizedArray);
console.log(sortedArray);
