//Reverse the provided array without using any of the built in js Array methods.

function reverseArray(arr) {
  for (var i = 0; i <= arr.length / 2; i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
