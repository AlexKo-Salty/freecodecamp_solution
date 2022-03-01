function diffArray(arr1, arr2) {
  let newArr = [];
  let cArr = arr1.concat(arr2).sort();
  cArr.map(function(num){
    if (cArr.filter(x => x === num).length == 1)
    {
      newArr.push(num);
    }
  })
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);