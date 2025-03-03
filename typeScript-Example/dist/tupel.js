"use strict";
// tupel typesScript concept : tupel is a fixed length array with fixed type of elements.
const displayPersonInfo = (person) => {
    const [name, age, drivingLicenec] = person;
    console.log(`Name : ${name}, Age : ${age}, Driving License : ${drivingLicenec ? 'Yes' : 'No'}`);
};
const person1 = ['jaish kunjadiya', 19, true];
const person2 = ['John Doe', 25, false];
// person1.push('hello') // Property 'push' does not exist on type 'PersonInfo'
console.log(person1);
displayPersonInfo(person1);
displayPersonInfo(person2);
// in this code person1 array ma push karta jo e push thai jai to e simple array aetle tupel bannavva mate readonly keyword use.
