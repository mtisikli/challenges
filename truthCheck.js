// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  let result = collection.every(i => (i[pre] ? true : false));
  return result;
}

let call = truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

console.log(call);
