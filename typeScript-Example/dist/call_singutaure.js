"use strict";
// #15: Call Signatures in TypeScript : The call signature refers to the declaration or definition of a function,
// which includes the function's name, parameters, and return type. It defines the structure and type information of a function
// without including the function's implementation or body.
const student = {
    name: 'jaish',
    personsage: 20,
    greet: function (country) {
        return `Welcome my name is ${this.name} and I am ${this.personsage} years old. and I am from ${country}`;
    }
};
const introduction = (student) => {
    const { name, personsage } = student;
    return `Welcome my name is ${name} and I am ${personsage} years old.`;
};
console.log(introduction(student));
console.log(student.greet('India'));
