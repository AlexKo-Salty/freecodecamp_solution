function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort(function(a,b){return a-b}).indexOf(num);
}

getIndexToIns([40, 60], 50);