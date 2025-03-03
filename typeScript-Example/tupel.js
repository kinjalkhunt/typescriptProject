// tupel typesScript concept : tupel is a fixed length array with fixed type of elements.
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], drivingLicenec = person[2];
    console.log("Name : ".concat(name, ", Age : ").concat(age, ", Driving License : ").concat(drivingLicenec ? 'Yes' : 'No'));
};
var person1 = ['jaish kunjadiya', 19, true];
var person2 = ['John Doe', 25, false];
// person1.push('hello') // Property 'push' does not exist on type 'PersonInfo'
console.log(person1);
displayPersonInfo(person1);
displayPersonInfo(person2);
// in this code person1 array ma push karta jo e push thai jai to e simple array aetle tupel bannavva mate readonly keyword use.
