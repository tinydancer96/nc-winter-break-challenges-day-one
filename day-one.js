function matrix(arr) {
  //   arr.map();
  // arr[x][y] -> arr[x = y][arr.length - x]
  let finalArr = [];
  for (let x = 0; x < arr.length; x++) {
    let innerArr = [];
    for (let y = 0; y < arr[x].length; y++) {
      //   console.log(`[${arr[arr.length - 1 - y][x]}]`);
      innerArr.push(arr[arr.length - 1 - y][x]);
    }
    finalArr.push(innerArr);
  }
  console.log(finalArr);
}
