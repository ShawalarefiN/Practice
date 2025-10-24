// Class and object problems
// problem 1
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.\n`);
  }
}
const person1 = new person("Shawal", 20);
const person2 = new person("Mahian", 19);

person1.introduce();
person2.introduce();

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

//example 1: Inheritance
class animal {
  speak() {
    console.log(`animal makes a sound`);
  }
}
class Cat extends animal {
  speak() {
    console.log(`cat meows`);
  }
}
const cat = new Cat();
cat.speak();

//example 2:
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak();

//example 3: (super() calls the parent constructor)
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // calls Vehicle constructor
    this.model = model;
  }

  getInfo() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const car2 = new Car("Toyota", "Corolla");
car2.getInfo();

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

//Problem 6: Bank Account class [Getters & Setters]
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    if (this._balance < 0) {
      return "not valid";
    } else {
      return (this._balance = newBalance);
    }
  }
  static compareAccounts(a, b) {
    if(a.balance > b.balance){
      return `Account A has more balance`
    } else if(a.balance < b.balance){
      return `Account B has more balance`
    }  else{
      return `same balance`
    }
  }
}
const acc1 = new BankAccount(500)
const acc2 = new BankAccount(1000)

console.log(BankAccount.compareAccounts(acc1,acc2))

//Problem 7: Temperature class

