/*
// Tests
console.log(uniteUnique([1, 2, 3], [5, 2, 1]), "→ Expected: [1, 2, 3, 5]");
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), "→ Expected: [1, 2, 3, 5, 4, 6, 7, 8]");
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]), "→ Expected: [1, 3, 2, 5, 4, 6]");
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), "→ Expected: [1, 3, 2, 5, 4]");

*/

function uniteUnique(...arr) {
  let uniqueItems = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (uniqueItems.includes(arr[i][j]) === false) {
        uniqueItems.push(arr[i][j]);
      }
      //   console.log(uniqueItems.includes(arr[i][j]));
    }
  }
  return uniqueItems;
}
