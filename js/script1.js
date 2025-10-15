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

//problem 4: Inheritance

