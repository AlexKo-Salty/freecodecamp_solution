function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let currentIndex = 0;
  while (currentIndex < arr.length)
  {
    newArr.push(arr.slice(currentIndex , size + currentIndex));
    currentIndex += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);