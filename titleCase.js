// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  return str
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.substring(1))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
