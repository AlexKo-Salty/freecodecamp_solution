function myReplace(str, before, after) {
  const regex = new RegExp(before,'g');
  const isUpper = /[A-Z]/;
  return isUpper.test(before[0]) ? str.replace(regex, after.charAt(0).toUpperCase() + after.slice(1)) : str.replace(regex, after.charAt(0).toLowerCase() + after.slice(1))
  //return str.replace(regex, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));