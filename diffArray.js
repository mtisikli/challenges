// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

function diffArray(arr1, arr2) {
  return arr1
    .filter(i => !arr2.includes(i))
    .concat(arr2.filter(i => !arr1.includes(i)));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]));
