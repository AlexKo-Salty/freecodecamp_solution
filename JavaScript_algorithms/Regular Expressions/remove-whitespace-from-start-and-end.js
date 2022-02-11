let hello = "   Hello, World!  ";
let wsRegex = /^\s+(\S+)\s(\S+)\s+/g; // Change this line
let result = hello.replace(wsRegex,"$1 $2"); // Change this line

console.log(result)