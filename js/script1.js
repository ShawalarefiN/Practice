// Class and object problems
// problem 1
class person {
    constructor(name, age){
        this.name = name;
        this.age = age;        
    }
    introduce(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.\n`); 
    }
}
const person1 = new person("Shawal", 20);
const person2 = new person("Mahian", 19);

person1.introduce()
person2.introduce()

// problem 2
class rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;        
    }
    area(){
        let area = this.width * this.height;
        return `Area = ${area}\n`
    }
    perimeter(){
        let perimeter = 2 * (this.width + this.height);
        return `Perimeter = ${perimeter}\n`
    }
}

const rect1 = new rectangle(20,10);
console.log(rect1.area())
console.log(rect1.perimeter())

//Problem 3
class car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
        }
    getInfo(){
        return `Brand = ${this.brand}\nmodel = ${this.model}\nyear = ${this.year}\n`
    }
        
}
const car1 = new car("toyota","gt86", 2016)

console.log(car1.getInfo())

//example 1: Inheritance
class animal {    
    speak(){
        console.log(`animal makes a sound`)
    }
}
class Cat extends animal{
    speak(){
        console.log(`cat meows`)
    }
}
const cat = new Cat();
cat.speak()

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
class shape{    
    getArea(){}
}

class circle extends shape{
  constructor (r){
    super();
    this.r = r;
  }
  getArea(){    
    return Math.PI * (this.r ** 2);
  }
}

class square extends shape{   
    constructor (a,b){
    super()
    this.a = a;
    this.b = b;
  }
  getArea(){   
    return this.a ** 2;
  }
}
const sq = new square(5,5);
const cir = new circle(1);

console.log("\nSquare Area: " + sq.getArea())
console.log("Circle area: " + cir.getArea())

