// Create a function that looks through an array and returns the first element in the array that passes a truth test. If no element passes the test, return undefined.

function trueElement(arr, func) {
  let result = arr.filter(func);
  return result[0];
}

console.log(trueElement([1, 2, 3, 4], num => num % 2 === 0));
