// ****************************** static properties keyword ****************************** //
// Static properties : In typescript, static method and properties belong to the class itself rather
// than to instances of the class. By marking a method or property static, we can access them directly
// from the class without needing to create an instance of the class. this is useful for utility functions
// or properties that don't rely on instance-specific data.
var PersonStaticMethod = /** @class */ (function () {
    function PersonStaticMethod() {
    }
    PersonStaticMethod.add = function (num1, num2) {
        return num1 + num2;
    };
    PersonStaticMethod.subs = function (num1, num2) {
        return num1 - num2;
    };
    PersonStaticMethod.PI = Math.PI;
    return PersonStaticMethod;
}());
console.log("Static properties : ", PersonStaticMethod.PI);
console.log("Static properties : ", PersonStaticMethod.add(10, 5));
console.log("Static properties : ", PersonStaticMethod.subs(10, 5));
