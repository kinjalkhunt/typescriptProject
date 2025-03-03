//            |     parent class     |      child class      |       Outside class
// Public     |         ✓            |            ✓          |             ✓
// Protected  |         ✓            |            ✓          |             x
// Private    |         ✓            |            x          |             x
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
var PersonAc = /** @class */ (function () {
    function PersonAc(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    PersonAc.prototype.introduceAc = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old. I Love ").concat(this.hobbies.join(","), ".");
    };
    PersonAc.prototype.getHobbies = function () {
        return this.hobbies;
    };
    PersonAc.prototype.getAge = function () {
        return this.age;
    };
    return PersonAc;
}());
var StudentAc = /** @class */ (function (_super) {
    __extends(StudentAc, _super);
    function StudentAc(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    StudentAc.prototype.introduceAc = function () {
        return " ".concat(_super.prototype.introduceAc.call(this), " I am in grade ").concat(this.grade, ".");
    };
    return StudentAc;
}(PersonAc));
var PersonAC = new PersonAc("jaish", 12, ["vollyBall", "painting", "coding"]);
// console.log("Person without Inheritance data : ", PersonInheritanceData.introduce());
console.log("Student with Inheritance data : ", PersonAC.getAge());
var StudentAc1 = new StudentAc("Harsh", 20, ["cricket", "Sports"], 10);
console.log("Student Acess modify ", StudentAc1.getHobbies());
console.log("Student Acess modify ", StudentAc1.introduceAc());
// class PersonAc { // parent class
//     public name: string
//     protected age: number
//     private hobbies: string[]
//     public name1: string
//     protected age1: number
//     private hobbies1: string[]
//     constructor( name: string, age: number, hobbies: string[], name1: string, age1: number, hobbies1: string[] ) {
//         this.name = name
//         this.age = age
//         this.hobbies = hobbies
//         this.name1 = name1
//         this.age1 = age1
//         this.hobbies1 = hobbies1
//     }
// }
// ********************** short code (Shorthand Properties in Classes) *********************** //
var PersonAc1 = /** @class */ (function () {
    function PersonAc1(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    PersonAc1.prototype.introduceAc1 = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old. I Love ").concat(this.hobbies.join(","), ".");
    };
    return PersonAc1;
}());
var StudentAc2 = /** @class */ (function (_super) {
    __extends(StudentAc2, _super);
    function StudentAc2(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    StudentAc2.prototype.introduceAc1 = function () {
        return " ".concat(_super.prototype.introduceAc1.call(this), " I am in grade ").concat(this.grade, ".");
    };
    return StudentAc2;
}(PersonAc1));
var PersonAC2 = new PersonAc1("jaish", 12, ["vollyBall", "painting", "coding"]);
var StudentAc3 = new StudentAc2("Harsh", 20, ["cricket", "Sports"], 10);
console.log("class Shorthand PersonAC2 ", PersonAC2.introduceAc1());
console.log("class Shorthand StudentAc3 ", StudentAc3.introduceAc1());
