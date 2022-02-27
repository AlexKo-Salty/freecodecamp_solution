function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  eat: function() {
    console.log("japjapjap");
  },
  describe: function() {
    console.log("Bark");
  },
  numLegs: 4
};