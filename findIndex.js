// Return the lowest index at which a value should be inserted into an array once it has been sorted. The returned value should be a number.

function findIndex(arr, num) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      index++;
    }
  }
  return index;
}

console.log(findIndex([80, 60, 70, 40], 50));
