// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  const arr = num.toString().split("");

  const resultArr = [];

  for (const n of arr) {
    const square = +n * +n;

    resultArr.push(+square);
  }

  return resultArr.join().replace(/[,]+/g, "");
}

console.log(squareDigits(9119));
