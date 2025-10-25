//problem 8: user class
class User {
  static count = 0;
  constructor (name){
    this.name = name;
    User.count++;
  }
}
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

console.log(User.count);

//Employee Counter
class Employee {
  static count = 0;
  constructor(name,position){
    this._name = name;
    this._position = position;
    Employee.count++;
  }
  static showCount(){   
    return `\nTotal employees: ${Employee.count}`
  }    
}

const e1 = new Employee("Alice", "Manager");
const e2 = new Employee("Bob", "Developer");

console.log(Employee.showCount()); 
