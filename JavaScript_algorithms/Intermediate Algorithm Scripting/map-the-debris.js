function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  arr.map(function (o){
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(o.avgAlt + earthRadius,3) / GM));
    o.orbitalPeriod = orbitalPeriod;
    delete o.avgAlt
  })

  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));