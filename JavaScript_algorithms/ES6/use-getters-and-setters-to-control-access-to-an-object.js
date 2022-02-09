// Only change code below this line
class Thermostat {
  constructor(f) {
    this._temperature = 5/9 * (f - 32)
  }
  get temperature(){
    return this._temperature
  }
  set temperature(temp){
    this._temperature = temp
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius