function countingSort(A) {
    // A[]-- Initial Array to Sort
    var k = Math.max.apply(Math, A);
    var c = new Array(k + 1).fill(0);
    var B = new Array(A.length);
    for (var i = 0; i <= k; i++) {
        c[i] = 0;
    }
    // Storing Count of each element
    for (var j = 0; j < A.length; j++) {
        c[A[j]]++;
    }
    // Change C[i] such that it contains actual
    // position of these elements in output array
    for (var i = 1; i <= k; i++) {
        c[i] += c[i - 1];
    }
    // Build Output array from C[i]
    for (var j = A.length - 1; j >= 0; j--) {
        B[c[A[j]] - 1] = A[j];
        c[A[j]]--;
    }
    return B;
}
console.log(countingSort([2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]));
