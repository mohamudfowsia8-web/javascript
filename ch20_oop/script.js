// class BankAccount {
//   #balance = 0; 

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const acc = new BankAccount();
// acc.deposit(100);
// console.log(acc.getBalance()); 

// class Animal {
//   speak() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.speak(); 


// class Shape {
//   draw() {
//     console.log("Drawing shape");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing circle");
//   }
// }

// class Square extends Shape {
//   draw() {
//     console.log("Drawing square");
//   }
// }

// const shapes = [new Circle(), new Square()];
// shapes.forEach(shape => shape.draw());


class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {
    console.log("Engine ignited");
  }
}

const car = new Car();
car.start();

