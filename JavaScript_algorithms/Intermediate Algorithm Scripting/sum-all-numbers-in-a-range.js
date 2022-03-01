function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  })

/*
Arithmetic Progression Formula is used;
Sum = (n/2) [2a+ (n-1)d]
a = First number
l = Last number
n = total number terms = l - a + 1 
d = common difference, in this tutorial, is 1
*/
  return ((arr[1] - arr[0] + 1) / 2) * ((2 * arr[0]) + (arr[1]  - arr[0]))
}

console.log(sumAll([5, 10]));