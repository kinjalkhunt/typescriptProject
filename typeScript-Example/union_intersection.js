// union : union ne typeScript ma / (pipe) symbol user
// Union Typescript : union types allow you to specify that a variable can hold values of 
// multiple types. You use the / (pipe) symbol to define a union type.
// In typeScript, when using a union type, it is essential to ensure that at least one of the types
// in the union includes all the required properties. failure to do so will result in a type error during compilation.
// example 1 : 
var valueUnion = function (unValue) {
    console.log("Received value:", unValue);
};
valueUnion(55);
valueUnion("hello");
valueUnion(true);
// example 2 : 
var userInput = function (unValue) {
    if (typeof unValue === 'number') {
        return unValue * 2;
    }
    else if (typeof unValue === 'string') {
        return unValue.toUpperCase();
    }
    else {
        throw new Error("Invalid inout data");
    }
};
console.log(userInput(50));
console.log(userInput("hello"));
var employeeDetails = {
    name: "jaish kunjadiya",
    age: 19,
    empID: 101,
};
var employeeDetails1 = {
    name: "jaish kunjadiya",
    age: 19,
    empID: 101,
    department: "IT"
};
