function MaxHeapsort(array) {
  buildMaxHeap(array); // Build a max-heap from the input array

  for (let i = array.length - 1; i > 0; i--) {
    // Swap the root element (which is the maximum element) with the last element
    [array[0], array[i]] = [array[i], array[0]];

    // Restore the heap property by sifting down the new root element
    maxHeapify(array, 0, i);
  }
  return array;
}

function buildMaxHeap(array) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i, array.length);
  }
}

// BubbleDown
function maxHeapify(array, i, size) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    maxHeapify(array, largest, size);
  }
}
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = MaxHeapsort(arr);

console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]