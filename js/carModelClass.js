//Problem 3
class car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return `Brand = ${this.brand}\nmodel = ${this.model}\nyear = ${this.year}\n`;
  }
}
const car1 = new car("toyota", "gt86", 2016);

console.log(car1.getInfo());