function pairElement(str) {
  const atPair = ["A","T"];
  const cgPair = ["C","G"];
  return str.split('').map(function(x){
    switch (x) {
      case "A":
        return ["A","T"];
      case "T":
        return ["T","A"];
      case "C":
        return ["C","G"];
      case "G":
        return ["G","C"];
    };
  });
}

console.log(pairElement("GCG"));