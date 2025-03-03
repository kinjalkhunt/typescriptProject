// #15: Call Signatures in TypeScript : The call signature refers to the declaration or definition of a function,
// which includes the function's name, parameters, and return type. It defines the structure and type information of a function
// without including the function's implementation or body.

// lets and one function inside the object. It's more like a method in the object.

// very important => call signature are typically used inside object type notations to describe 
// the shape of the function within the object types. 

type Student = {
    name: string,
    personsage: number,
    gender?: string,
    greet: (country: string) => string, // method call signature
    // (country: string): string // call signature
}
const student: Student = {
    name: 'jaish',
    personsage: 20,
    greet: function (country): string {
        return `Welcome my name is ${this.name} and I am ${this.personsage} years old. and I am from ${country}`;
    }
}

const introduction : (student: Student) => string = (student: Student) : string => {
    const {name, personsage} = student;
    return `Welcome my name is ${name} and I am ${personsage} years old.`;
}

console.log(introduction(student));
console.log(student.greet('India'));




