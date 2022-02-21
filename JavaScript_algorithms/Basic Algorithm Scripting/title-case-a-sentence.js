function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  return (words.map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
}

titleCase("I'm a little tea pot");