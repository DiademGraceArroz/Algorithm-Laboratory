// Tree Sort Algorithm
function treeSort(array) {
  // Define the TreeNode class for creating a binary search tree
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // Insert each element of the array into the binary search tree
  function insert(root, value) {
    if (!root) {
      return new TreeNode(value);
    }
    if (value < root.value) {
      root.left = insert(root.left, value);
    } else {
      root.right = insert(root.right, value);
    }
    return root;
  }

  // Traverse the binary search tree in order to return the sorted array
  function traverse(root, array) {
    if (!root) {
      return array;
    }
    traverse(root.left, array);
    array.push(root.value);
    traverse(root.right, array);
    return array;
  }

  // Create a binary search tree from the array and return the sorted array
  let root = null;
  for (let i = 0; i < array.length; i++) {
    root = insert(root, array[i]);
  }
  return traverse(root, []);
}

// Generate a random array of integers of a given size
function generateRandomArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  return array;
}

// Generate an array of integers that will produce an imbalanced tree of a given size
function generateImbalancedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

// Measure the execution time of a function
function measureExecutionTime(func, arg) {
  let startTime = Date.now();
  func(arg);
  let endTime = Date.now();
  return endTime - startTime;
}

// Test the Tree Sort algorithm with different sizes and types of arrays
let sizes = [100, 500, 1000, 5000];
let randomExecutionTimes = [];
let imbalancedExecutionTimes = [];

for (let size of sizes) {
  let randomArray = generateRandomArray(size);
  let imbalancedArray = generateImbalancedArray(size);

  let randomTime = measureExecutionTime(treeSort, randomArray);
  let imbalancedTime = measureExecutionTime(treeSort, imbalancedArray);

  randomExecutionTimes.push(randomTime);
  imbalancedExecutionTimes.push(imbalancedTime);
}

// Print the execution times for both types of arrays
// console.log("Random Array Execution Times: " + randomExecutionTimes);
// console.log("Imbalanced Array Execution Times: " + imbalancedExecutionTimes);

console.log(generateRandomArray(10))