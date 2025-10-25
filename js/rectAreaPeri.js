// problem 2
class rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    let area = this.width * this.height;
    return `Area = ${area}\n`;
  }
  perimeter() {
    let perimeter = 2 * (this.width + this.height);
    return `Perimeter = ${perimeter}\n`;
  }
}

const rect1 = new rectangle(20, 10);
console.log(rect1.area());
console.log(rect1.perimeter());