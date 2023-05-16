function MinHeapsort(array) {
  buildMinHeap(array); // Build a min-heap from the input array

  for (let i = array.length - 1; i > 0; i--) {
    // Swap the root element (which is the minimum element) with the last element
    [array[0], array[i]] = [array[i], array[0]];

    // Restore the heap property by sifting down the new root element
    minHeapify(array, 0, i);
  }
  return array;
}

function buildMinHeap(array) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    minHeapify(array, i, array.length);
  }
}

// BubbleDown
function minHeapify(array, i, size) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let smallest = i;

  if (left < size && array[left] < array[smallest]) {
    smallest = left;
  }

  if (right < size && array[right] < array[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [array[i], array[smallest]] = [array[smallest], array[i]];
    minHeapify(array, smallest, size);
  }
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = MinHeapsort(arr);

console.log(sortedArr); // Output: [8, 7, 6, 5, 4, 3, 2, 1]
