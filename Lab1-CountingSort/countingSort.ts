function countingSort(A: number[]) { // original array
  // A[]-- Initial Array to Sort
  const k = Math.max(...A); // highest number
  const c = new Array(k + 1).fill(0); // new array
  const B = new Array(A.length); // output (sorted) array

  for (let i = 0; i <= k; i++) {
    c[i] = 0;
  }

  // Storing Count of each element
  for (let j = 0; j < A.length; j++) {
    c[A[j]]++; // c[A[j]] = c[A[j]] + 1
  }

  // Change C[i] such that it contains actual
  // position of these elements in output array
  for (let i = 1; i <= k; i++) {
    c[i] += c[i - 1]; // c[A[j]] = c[A[j]] + 1
  }

  // Build Output array from C[i]
  for (let j = A.length - 1; j >= 0; j--) {
    B[c[A[j]] - 1] = A[j];
    c[A[j]]--; // c[A[j]] = c[A[j]] - 1
  }

  return B;
}

let sort1 = countingSort([2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]);
let sort2 = countingSort([11, 45, 2, 5, 8, 94, 78, 33, 32, 65, 57, 46, 75, 54]);

console.log('Counting sort 1 result:', sort1);
console.log('Counting sort 2 result:', sort2);