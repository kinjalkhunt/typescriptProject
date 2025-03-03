// union : union ne typeScript ma / (pipe) symbol user

// Union Typescript : union types allow you to specify that a variable can hold values of 
// multiple types. You use the / (pipe) symbol to define a union type.

// In typeScript, when using a union type, it is essential to ensure that at least one of the types
// in the union includes all the required properties. failure to do so will result in a type error during compilation.

// example 1 : 

const valueUnion: (unValue: string | number | boolean) => void = (unValue) => {
    console.log("Received value:", unValue);
};

valueUnion(55);
valueUnion("hello");
valueUnion(true);

// example 2 : 

const userInput = (unValue) => {
    if(typeof unValue === 'number'){
        return unValue * 2
    } else if(typeof unValue  === 'string'){
        return unValue.toUpperCase()
    } else {
        throw new Error("Invalid inout data")
    }
};

console.log(userInput(50));
console.log(userInput("hello"));


// Intersection Typescript : Intersection types allow you to combine multiple types into single type.
//  You use the & (ampersand) symbol to define an intersection type.

type interPerson = {
    name: string;
    age: number;
}

type employee = {
    empID: number;
    department: string
}

type employeeInfo = interPerson | employee // union means two type cho aema first type complete write karvi and second type ma one value write karvi hoi tyare union use thai.

const employeeDetails: employeeInfo = {
    name: "jaish kunjadiya",
    age: 19,
    empID: 101,
}

type employeeInfo1 = interPerson & employee // Intersection means two type cho aema both type ni value write karvi hoi tyare Intersection use thai.

const employeeDetails1: employeeInfo1 = {
    name: "jaish kunjadiya",
    age: 19,
    empID: 101,
    department: "IT"
}


