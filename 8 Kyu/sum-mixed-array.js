// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  return x.map(Number).reduce((acc, curr) => acc + curr, 0);
}

// OR:

const sumMix = x => x.map(Number).reduce((acc, curr) => acc + curr, 0);