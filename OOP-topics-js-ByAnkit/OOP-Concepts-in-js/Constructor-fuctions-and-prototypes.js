

// Before ES6, JS used constructor functions and prototypes to achieve OOP.

// This approach is still widely used and is essential to understand for legacy code.

function Car(brand, Model) {
  this.brand = brand;
  this.Model = Model;
}

Car.prototype.start = function () {
  console.log(`${this.brand} ${this.Model} is starting..`);
};

const myCar = new Car("Toyota", "Corolla");
myCar.start();
