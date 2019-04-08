// Truncate a string if it is longer than the given maximum string length. Return the truncated string with a ... ending.

function truncateString(str, num) {
  return str.length > num ? str.substring(0, num) + "..." : str;
}

console.log(truncateString("This too shall pass.", 8));
