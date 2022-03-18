function addTogether(...args) {
  if (args.filter(x => typeof x !== "number").length > 0)
  {
    return undefined;
  } else if (args.length > 1) {
    return args[0] + args[1];
  } else {
    return function(y){
        return typeof y == "number" ? args[0]+y : undefined;
      };  
  }
}

console.log(addTogether(2)(3));