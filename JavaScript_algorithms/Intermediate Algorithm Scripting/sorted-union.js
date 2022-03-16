function uniteUnique(...arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(curr)
  }
  ,[]).reduce((init, current) => {
    if (init.length === 0 || !init.includes(current))
    {
      init.push(current);
    }
    return init;
  },[]);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));