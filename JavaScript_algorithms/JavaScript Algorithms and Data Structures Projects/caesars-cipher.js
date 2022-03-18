function rot13(str) {
  /*Letter "M" is the middle of ROT13 convert
  */ 
  let regex = /[A-Z0-9]/g;
  return str.split('').map(function(l){
    return l.match(regex) ? String.fromCharCode(l.charCodeAt(0) + (l <= 'M' ? 13 : -13)) : l;
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));