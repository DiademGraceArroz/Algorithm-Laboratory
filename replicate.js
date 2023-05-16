// recursion
function replicate(times, number) {
  if (times < 1) {
    return [];
  }
  if (times === 1) {
    return [number];
  } else {
    return [number].concat(replicate(times - 1, number));
  }
}
console.log(replicate(3, 5));

// replicate(3, 5) => [5, 5, 5]
// replicate(-2, 1000) => []
// replicate(0, 999) => []
// replicate(7, 16) => [16, 16, 16, 16, 16, 16, 16]

// times = 2, [n] + [n] <- [n] + times(1)
// times = 3, [n] + [n, n] <- [n] + times(2)
// times = 4, [n] + [n,n ,n] <- [n] + times(4)
