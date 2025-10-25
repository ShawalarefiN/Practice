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