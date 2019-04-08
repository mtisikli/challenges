// Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. The input arrays should remain the same after the function runs.

function joinByIndex(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

console.log(joinByIndex([1, 2, 3], [4, 5, 6], 1));
