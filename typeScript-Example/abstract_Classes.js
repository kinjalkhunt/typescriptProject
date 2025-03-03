// Abstract Classes in TypeScript --=> Abstract Classes provide a way to define common properties and methods that multiple
// derived classes can share. This promotes code reuse and helps establish a common interface for related classes. and 
// Abstract classes cannot be instantiated
// Abstract classes cannot be instans created.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// for example  ===========>>>> area of rectangle
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth, side) {
        this.length = length;
        this.breadth = breadth;
        this.side = side;
    }
    return Rectangle;
}());
var Rectangle1 = /** @class */ (function (_super) {
    __extends(Rectangle1, _super);
    function Rectangle1(length, breadth, side) {
        var _this = _super.call(this, length, breadth, side) || this;
        _this.length = length;
        _this.breadth = breadth;
        _this.side = side;
        _this.displayArea = function () {
            console.log("Rectangle Area is ".concat(_this.length, " and ").concat(_this.breadth, ". square side is ").concat(_this.side));
        };
        return _this;
    }
    Rectangle1.prototype.calculateArea = function () {
        return this.length * this.breadth;
    };
    Rectangle1.prototype.calcuLateSide = function () {
        return this.side * this.side;
    };
    return Rectangle1;
}(Rectangle));
var rectangle = new Rectangle1(10, 5, 8);
console.log("Rectangle Area : ", rectangle.calculateArea());
console.log("square Side : ", rectangle.calcuLateSide());
rectangle.displayArea();
