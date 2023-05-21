import { radixData } from "./radixSortData.js";

// Helper function to get the character at a specific index of a string
function radixSort(strings) {
  const radix = 26; // Number of possible characters (a-z)

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
      const currentString = strings[j];
      if (currentString.length > i) {
        const charCode = currentString.charCodeAt(i) - 97; // Convert character to a number between 0 and 25
        count[charCode]++;
      } else {
        // If the string has a length less than the current index, consider it as having a character with a value of 0
        count[0]++;
      }
    }

    // Calculate the cumulative count
    for (let j = 1; j < radix; j++) {
      count[j] += count[j - 1];
    }

    // Build the sorted array based on the current character
    for (let j = strings.length - 1; j >= 0; j--) {
      const currentString = strings[j];
      if (currentString.length > i) {
        const charCode = currentString.charCodeAt(i) - 97; // Convert character to a number between 0 and 25
        sortedStrings[--count[charCode]] = currentString;
      } else {
        // Place strings with length less than the current index at the beginning of the sorted array
        sortedStrings[--count[0]] = currentString;
      }
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
