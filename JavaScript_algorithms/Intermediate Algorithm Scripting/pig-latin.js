function translatePigLatin(str) {
  let regex = /[aeiou]/;
  if (regex.test(str))
  {
    return str.match(regex).index === 0 ? str + "way" : str.split('').slice(str.match(regex).index).join('') + str.split('').splice(0,str.match(regex).index).join('') + 'ay'
  } 
  else
  {
    return str + "ay";
  } 
}

console.log(translatePigLatin("consonant"));