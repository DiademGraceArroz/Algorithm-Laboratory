function binarySearchImproved(array, number, target) {
  let left = 0;
  let right = number - 1;
  let numSplits = 0;

  if (target < array[left] || target > array[right]) {
    return { targetIndex: -1, numSplits };
  }

  while (left <= right) {
    const middle = left + ((right - left) >> 1);

    if (array[middle] === target) {
      return { targetIndex: middle, numSplits };
    }

    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    numSplits++;

    if (left > right) {
      break;
    }

    if (array[left] === target) {
      return { targetIndex: left, numSplits };
    }

    if (array[right] === target) {
      return { targetIndex: right, numSplits };
    }

    numSplits++;

    if (array[left] < target && array[right] > target) {
      continue;
    }

    if (array[left] > target) {
      right = left - 1;
      left = 0;
    } else {
      left = right + 1;
      right = n - 1;
    }
  }

  return { targetIndex: -1, numSplits };
}

function testBinarySearchPerformance() {
  const arr = Array.from({ length: 100000 }, (_, i) => i); // create an array with 100000 elements
  const targets = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 100000)
  ); // create an array of 10000 random targets

  console.time("Original Binary Search");
  for (let i = 0; i < targets.length; i++) {
    binarySearchImproved(arr, arr.length, targets[i]);
  }
  console.timeEnd("Original Binary Search");

  console.time("Improved Binary Search");
  for (let i = 0; i < targets.length; i++) {
    binarySearchImproved(arr, arr.length, targets[i]);
  }
  console.timeEnd("Improved Binary Search");
}

testBinarySearchPerformance();
