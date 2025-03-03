// Inheritance in TS 
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
// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
var PersonInheritance = /** @class */ (function () {
    function PersonInheritance(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    PersonInheritance.prototype.introduce = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old. I Love ").concat(this.hobbies.join(","), ". ");
    };
    return PersonInheritance;
}());
var StudentInheritance = /** @class */ (function (_super) {
    __extends(StudentInheritance, _super);
    function StudentInheritance(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    StudentInheritance.prototype.introduce = function () {
        return " ".concat(_super.prototype.introduce.call(this), " I am in grade ").concat(this.grade, ".");
    };
    return StudentInheritance;
}(PersonInheritance));
var PersonInheritanceData = new PersonInheritance("jaish", 12, ["vollyBall", "painting", "coding"]);
var StudentInheritance1 = new StudentInheritance("poojan", 17, ["dirving", "vollyBall", "cricket"], 10);
// console.log("Person without Inheritance data : ", PersonInheritanceData.introduce());
console.log("Student with Inheritance data : ", StudentInheritance1.introduce());
