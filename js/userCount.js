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