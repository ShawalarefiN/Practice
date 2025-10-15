// Class and object problems
// problem 1
class person {
    constructor(name, age){
        this.name = name;
        this.age = age;        
    }
    introduce(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`); 
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
         
    }
}