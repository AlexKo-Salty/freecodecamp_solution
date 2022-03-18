function palindrome(str) {
  return str.toLowerCase().match(/[a-zA-Z0-9]/g).join('') === str.toLowerCase().match(/[a-zA-Z0-9]/g).reverse().join('');
}

console.log(palindrome("eye"));