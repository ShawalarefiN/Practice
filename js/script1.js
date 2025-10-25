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

// example 4: Private Fields & Advanced Features
class Wallet {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.deposit(50);
console.log(w.getBalance()); // 50

 

