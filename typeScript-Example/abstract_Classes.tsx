// Abstract Classes in TypeScript --=> Abstract Classes provide a way to define common properties and methods that multiple
// derived classes can share. This promotes code reuse and helps establish a common interface for related classes. and 
// Abstract classes cannot be instantiated
// Abstract classes cannot be instans created.

// abstract class focus on class inheritance and sharing common functionality, whereas the useContext hook in React focuses
// on managing global state and allowing components to consume that state. 

// abstract class PersonAbstract {
//     name: string,
//     age: number,
// }

// class PersonDetails: PersonAbstract = {
//     name: "jaish",
//     age: 19
// }

// class PersonDetails1: PersonAbstract = {
//     name: "poojan",
//     age: 18
// }

// class PersonDetails2: PersonAbstract = {
//     name: "yug",
//     age: 17
// }

// for example  ===========>>>> area of circle
// abstract class Shape {
//     constructor(protected color: string) {}

//     abstract calculateArea(): number
//     abstract displayArea: () => void
// }

// class Circle extends Shape {
//     constructor(protected color: string, protected radius: number) {
//         super(color)
//     }

//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius
//     }

//     displayArea: () => void = () => {
//         console.log(`Color of the circle is ${this.color} circle area is ${this.radius}`)
//     }
// }

// const circle = new Circle("red", 5)
// console.log("Circle Area : ", circle.calculateArea().toFixed(2));
// circle.displayArea()    



// for example  ===========>>>> area of rectangle and square 
abstract class Rectangle {
    constructor(protected length: number, protected breadth: number, protected side : number) {}

    abstract calculateArea(): number
    abstract calcuLateSide(): number
    abstract displayArea: () => void
}   

class Rectangle1 extends Rectangle {
    constructor(protected length: number, protected breadth: number, protected side : number) {
        super(length, breadth, side)
    }

    calculateArea(): number {
        return this.length * this.breadth
    }

    calcuLateSide(): number {
        return this.side * this.side
    }

    displayArea: () => void = () => {
        console.log(`Rectangle Area is ${this.length} and ${this.breadth}. square side is ${this.side}`);
    }
}

const rectangle = new Rectangle1(10, 5, 8)
console.log("Rectangle Area : ", rectangle.calculateArea());
console.log("square Side : ", rectangle.calcuLateSide());
rectangle.displayArea()


