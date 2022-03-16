function sumPrimes(num) {
  //Max: only require to loop until square root of num
  let array = [], sum = 0, max = Math.sqrt(num);

  //Create an array with isPrime Boolean from 0 to num
  for (let i = 0; i <= num; i++)
  {
    (i === 0 || i === 1) ? array.push(false) : array.push(true);
  }

  //Start from smallest prime no 2, change to false for all multiple of 2, and go on..
  for (let i = 2; i < max; i++){
    if (array[i]) {
      for (let j = i * i; j <= num; j += i) {
        array[j] = false;
      }
    }
  }

  return array.reduce(function(sum,isPrime,index){
    return isPrime ? sum += index : sum;
  },0);
}

console.log(sumPrimes(10));