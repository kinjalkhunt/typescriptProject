// Interface in TypeScript : In, typescript, an interface is a powerful feature that allows you to define a contract for an 
// object's shape. It specifies the properties and thier types that an object must have to be considered of that particular 
// interface type. Interfaces are primarily used for type-checking during devlopment and do not genrate any javascript code at runtime.

// object create karvi tyare interface no use thai che 

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'John',
    age: 30
}

const persons: Person = {
    name: 'vinod',
    age: 65
}

console.log("person interface", person);


