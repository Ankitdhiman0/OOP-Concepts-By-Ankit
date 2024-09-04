// Poly means Many

// Morphism means Forms

// Polymorphism allows methods to do different things based on the object it is acting upon, even they have same names.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    // super keyword is used to access the parent class properties and methods.
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  area() {
    return this.width * this.height;
  }
}

const circle = new Circle(2);
const rectangle = new Rectangle(2, 3);

console.log(circle.area());
console.log(rectangle.area());
