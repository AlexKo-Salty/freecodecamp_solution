function checkPositive(arr) {
  // Only change code below this line
  return arr.every(function(n) {
    return n > 0;
  });

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);