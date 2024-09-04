// Encapsulation is the binding of the data and methods that operate on the data into asingle unit or class.

// It also restricts direct access to some of the objects components, which is a means of data protection.

class Person {
  constructor(name, age) {
    this._name = name; 
    // _ means it is private property.
    this._age = age;
  }

  getDetails() {
    return `${this._name} is ${this._age} years old.`;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    }
  }
}

const person = new Person("Ankit", 22);
console.log(person.getDetails());

person.setAge(21);
console.log(person.getDetails());
