function bouncer(arr) {
  return arr.filter(val => Boolean(val));
}

bouncer([7, "ate", "", false, 9]);