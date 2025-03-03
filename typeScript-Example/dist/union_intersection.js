"use strict";
// union : union ne typeScript ma / (pipe) symbol user
// Union Typescript : union types allow you to specify that a variable can hold values of 
// multiple types. You use the / (pipe) symbol to define a union type.
// In typeScript, when using a union type, it is essential to ensure that at least one of the types
// in the union includes all the required properties. failure to do so will result in a type error during compilation.
// example 1 : 
const valueUnion = (unValue) => {
    console.log("Received value:", unValue);
};
valueUnion(55);
valueUnion("hello");
valueUnion(true);
const employeeDetails = {
    name: "jaish kunjadiya",
    age: 19,
    empID: 101,
};
const employeeDetails1 = {
    name: "jaish kunjadiya",
    age: 19,
    empID: 101,
    department: "IT"
};
