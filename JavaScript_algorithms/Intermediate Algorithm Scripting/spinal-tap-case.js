function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2" );
  return str.toLowerCase().split(regex).filter(w => w !== '').join('-');
}

console.log(spinalCase('The_Andy_Griffith_Show'));