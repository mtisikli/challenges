//Create an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining element(s).

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Chunk(arr, num) {
  let arrA = [...arr];
  let arrB = [];

  for (let i = 0; i < arrA.length / num; i++) {
    arrB.push(arr.splice(0, num));
  }
  return arrB;
}

console.log(Chunk(array, 4));
