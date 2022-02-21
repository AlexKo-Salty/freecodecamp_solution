function truncateString(str, num) {
  return str.length <= num ? str : str.substring(0,num) + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));