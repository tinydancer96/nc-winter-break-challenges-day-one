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
