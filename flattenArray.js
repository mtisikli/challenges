//Flatten the indefinitely nested array

function flattenArray(arr) {
  const flattened = [].concat(...arr);
  return flattened.some(item => Array.isArray(item))
    ? flattenArray(flattened)
    : flattened;
}

console.log(flattenArray([11, [22, 33], [44, [55, 66, [77, [88]], 99]]]));
