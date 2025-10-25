//Problem 7: Temperature class
class Temperature {
  constructor(celcius){
    this._celcius = celcius;
  }
  get ferenheit(){
    return (this._celcius * 9/5) + 32; 
  }
  set ferenheit(f){
    this._celcius = (f - 32) * 5/9;
  }
}
const temp = new Temperature(0);
console.log(temp.ferenheit);

temp.ferenheit = 212;
console.log(temp._celcius);