function destroyer(arr, ...vs) {
  return arr.filter(v => !vs.some(n => {
    return n === v;
  }));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));