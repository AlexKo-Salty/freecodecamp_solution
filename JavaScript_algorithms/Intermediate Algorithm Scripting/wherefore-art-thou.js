function whatIsInAName(collection, source) {
  //const arr = [];
  // Only change code below this line
  return collection.filter(obj => {
    return Object.keys(source).every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  })
  // Only change code above this line
  //return arr;
}
