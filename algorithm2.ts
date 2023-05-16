function algorithm2(number: number) {
  let k = (number - 2) / 2;
  let integers_list: boolean[] = Array(k + 1).fill(true);

  for (let i = 1; i <= k + 1; i++) {
    let j = i;
    while (i + j + 2 * i * j <= k) {
      integers_list[i + j + 2 * i * j] = false;
      j += 1;
    }
  }
  if (number > 2) {
    console.log(2, " ");
  }
  for (let i = 1; i <= k + 1; i++) {
    if (integers_list[i]) {
      console.log(2 * i + 1, " ");
    }
  }
}

// algorithm2(20);

console.time("Execution Time");

algorithm2(20);

console.timeEnd("Execution Time");
