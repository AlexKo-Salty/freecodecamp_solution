//Get GCP by Euclidean Algorithm
function gcd (x,y) {
  return (x % y === 0) ? y : gcd(y, x % y);
}

//Get LCM by (x * y) / gcd(x,y)
function lcm (x,y) {
  return (x * y) / gcd(x,y);
}

function smallestCommons(arr) {
  //fill the missing value of array
  let mArray = [], range = [];
  arr.sort((a , b) => b - a);
  for (let i = arr[1] + 1; i < arr[0]; i++){
    mArray.push(i);
  }
  range = arr.concat(mArray).sort((a , b) => b - a);

  /*Get the LCM of the whole range by formula
    lcm(a,b,c...z) = lcm(lcm(a,b,c...)),z)
  */
  return range.reduce(function(sum, curr){
    return lcm(sum, curr);
  });
}

console.log(smallestCommons([1,5]));