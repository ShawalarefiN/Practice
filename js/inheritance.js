//Problem 4: inheriance
class shape {
  getArea() {}
}

class circle extends shape {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    return Math.PI * this.r ** 2;
  }
}

class square extends shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
  getArea() {
    return this.a ** 2;
  }
}
const sq = new square(5, 5);
const cir = new circle(1);

console.log("\nSquare Area: " + sq.getArea());
console.log("Circle area: " + Math.floor(cir.getArea()) + "\n");

//Problem 5:
class gari {
  constructor(name) {
    this.name = name;
  }
  startEngine() {}
}

class carr extends gari {
  startEngine() {
    return `${this.name} has started its engine`;
  }
}

class bike extends gari {
  startEngine() {
    return `${this.name} has started its engine\n`;
  }
}
const carr1 = new carr("Nissan");
const bike1 = new bike("H2R");

console.log(carr1.startEngine());
console.log(bike1.startEngine());

//example 4: getters & setters
class Counter {
  constructor() {
    this._count = 0;
  }

  get count() {
    return this._count;
  }

  set count(value) {
    if (value < 0) console.log("Count can't be negative");
    else this._count = value;
  }

  static description() {
    return "A simple counter class\n";
  }
}

const c = new Counter();
c.count = 5;
console.log(c.count);
console.log(Counter.description());

//example 5: getters & setters
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get greet() {
    return "Hello " + this.name;
  }
  set changeName(newName) {
    this.name = newName;
  }
}
const person3 = new Person("Mehtab", 20);
person3.changeName = "Azmain";
console.log(person3.name);