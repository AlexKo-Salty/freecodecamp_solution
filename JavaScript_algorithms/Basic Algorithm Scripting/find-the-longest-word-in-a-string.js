function findLongestWordLength(str) {
  let result = 0;
  let words = str.split(' ');
  for (let word in words)
  {
    if (result < words[word].length)
    {
      result = words[word].length;
    }
  }
  console.log(result)
  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");