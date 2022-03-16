function fearNotLetter(str) {  
  let missingChar =  (str.split('').map(x => x.charCodeAt(0)).find(function(v, index) {
    if (v - str.split('').map(x => x.charCodeAt(0))[index - 1] > 1)
    {
      return true;
    }
  }));

  return missingChar === undefined ? undefined : String.fromCharCode(missingChar - 1);
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));