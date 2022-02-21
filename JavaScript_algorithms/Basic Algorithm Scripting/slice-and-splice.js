function frankenSplice(arr1, arr2, n) {
  let result = [...arr1];
  result.unshift(...arr2.slice(0,n));
  result.push(...arr2.slice(n));
  console.log(result)
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
*/