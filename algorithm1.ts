function algorithm1(number: number) {
  let primeNumbers = new Array(number + 1); // A is the primeNumbers
  primeNumbers.fill(true);

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= number; j += i) {
        primeNumbers[j] = false;
      }
    }
  }

  let result = [];

  for (let i = 2; i <= number; i++) {
    if (primeNumbers[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(algorithm1(5))

console.time('Execution Time');

algorithm1(5);

console.timeEnd('Execution Time')
