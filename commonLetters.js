// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function commonLetters(arr) {
  let arr1 = arr[0].toLowerCase().split("");
  let arr2 = arr[1].toLowerCase().split("");

  return arr2.every(i => arr1.includes(i)) ? true : false;
}

console.log(commonLetters(["hello", "HEY"]));
