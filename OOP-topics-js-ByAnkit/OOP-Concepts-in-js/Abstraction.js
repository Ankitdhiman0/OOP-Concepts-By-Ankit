// Abstraction means hiding of the complex implementation details and showing only the necessary features of an object.

// In JS the abstraction can be achieved using methods like get and set to manage how properties are accessed or modified.

class bankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return `The balance for ${this.owner} is Rs${this.balance}.`;
  }
}

const account = new bankAccount("Ankit", 10000);
account.deposit(10000);
console.log(account.getBalance());
