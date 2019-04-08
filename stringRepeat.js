// Repeat a given string str for num times. Return an empty string if num is not a positive number.

function stringRepeat(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

console.log(stringRepeat("Hello", 5));
