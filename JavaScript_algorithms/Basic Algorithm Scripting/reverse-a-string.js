function reverseString(str) {
  let reverseStr = [];
  for (let i = 0; i < str.length; i++) {
    reverseStr.unshift(str[i])
  }
  return reverseStr.join("");
}

console.log(reverseString("hello"));
