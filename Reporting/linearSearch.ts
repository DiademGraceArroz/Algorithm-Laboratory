// 1
function linearSearch(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const valueToFind = 5;
const index = linearSearch(numbers, valueToFind);

if (index !== -1) {
  console.log(`Value ${valueToFind} found at index ${index}`);
} else {
  console.log(`Value ${valueToFind} not found in the array`);
}

// 2
function linearSearch2(arr: string[], value: string): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const names = ["John", "Mike", "Sara", "Emily", "Jessica"];
const nameToFind = "Mike";
const index2 = linearSearch2(names, nameToFind);

if (index2 !== -1) {
  console.log(`Name ${nameToFind} found at index ${index2}`);
} else {
  console.log(`Name ${nameToFind} not found in the array`);
}

