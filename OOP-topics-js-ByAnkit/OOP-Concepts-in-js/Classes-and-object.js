// Class : it is a template for creating objects.

// Objects: it is a collection of properties Key : values;

class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start() {
    console.log(`${this.brand} ${this.model} is starting..`);
  }
}

const myCar = new car("Toyota", "Corolla");
myCar.start();
