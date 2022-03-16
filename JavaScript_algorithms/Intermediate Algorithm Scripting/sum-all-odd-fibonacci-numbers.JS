function sumFibs(num) {
  let sumArray = [1,1]
  while ((sumArray[sumArray.length - 1] + sumArray[sumArray.length - 2]) <= num)
  {
    sumArray.push(sumArray[sumArray.length - 1] +       sumArray[sumArray.length - 2]);
  }

  return sumArray.reduce(function(prev, curr){
    return (curr % 2 === 0 ) ? prev : prev + curr;
  });
}

console.log(sumFibs(75025));