// Getters and setters allows you to define methods that are executed when a property is accessed or modified.

// They provide a way to control the access to the properties of an object.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }
}

const person = new Person("Ankit", 21);
console.log(person.name);

person.age = 22;
console.log(person.age);
