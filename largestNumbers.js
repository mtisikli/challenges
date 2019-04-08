// Return an array consisting of the largest number from each provided sub-array.

const argArr = [
  [1, 2, 3, 4],
  [101, 102, 103, 104],
  [201, 202, 203, 204],
  [301, 302, 303, 304],
  [401, 402, 403, 404]
];

function largestNumbers(arr) {
  let max = 0;
  let newArr = [];

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] > max) {
      max = arr[0][i];
    }
  }
  arr.shift();
  newArr.push(max);

  if (arr.length !== 0) {
    newArr = newArr.concat(largestNumbers(arr));
  }
  return newArr;
}

console.log(largestNumbers(argArr));
