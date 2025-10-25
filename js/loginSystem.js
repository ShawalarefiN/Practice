class LoginSystem{
    #password
    setPassword(pass){
       this.#password = pass;
    }
    checkPassword(enteredPass){
        if (enteredPass != this.#password){
            return `Wrong password`
        } else {
            return `Login Successful`
        }
    }
}

const user1 = new LoginSystem();
user1.setPassword("1322")
console.log(user1.checkPassword("abcd"));
console.log(user1.checkPassword("1322"));

