// #15: Call Signatures in TypeScript : The call signature refers to the declaration or definition of a function,
// which includes the function's name, parameters, and return type. It defines the structure and type information of a function
// without including the function's implementation or body.
var student = {
    name: 'jaish',
    personsage: 20,
    greet: function (country) {
        return "Welcome my name is ".concat(this.name, " and I am ").concat(this.personsage, " years old. and I am from ").concat(country);
    }
};
var introduction = function (student) {
    var name = student.name, personsage = student.personsage;
    return "Welcome my name is ".concat(name, " and I am ").concat(personsage, " years old.");
};
console.log(introduction(student));
console.log(student.greet('India'));
