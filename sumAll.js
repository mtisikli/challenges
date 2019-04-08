// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
  let result = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([4, 6]));
