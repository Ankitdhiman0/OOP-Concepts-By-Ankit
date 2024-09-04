// Inheritance is mechanism by which one class can inherit the properties and methods of another class.

// The class that is inherited is known as parent class.
// The class which inherits is known as child class.
// The extends keyword is used to inherit the class. 

class parent {
  constructor(A, B) {
    this.A = A;
    this.B = B;
  }

  sum() {
    const Add = this.A + this.B;
    console.log(Add);
  }
}

class child extends parent {
  sum() {
    const Add = this.A + this.B;
    console.log(Add);
  }
}

const Child = new child(1, 2);
Child.sum();
