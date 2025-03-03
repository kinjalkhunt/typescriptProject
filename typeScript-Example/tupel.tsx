// tupel typesScript concept : tupel is a fixed length array with fixed type of elements.

type PersonInfo = readonly [string, number, boolean]

const displayPersonInfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
    const [name, age, drivingLicenec] = person
    console.log(`Name : ${name}, Age : ${age}, Driving License : ${drivingLicenec ? 'Yes' : 'No'}`);
}

const person1: PersonInfo = ['jaish kunjadiya', 19, true]
const person2: PersonInfo = ['John Doe', 25, false]

// person1.push('hello') // Property 'push' does not exist on type 'PersonInfo'
console.log(person1);

displayPersonInfo(person1)
displayPersonInfo(person2)

// in this code person1 array ma push karta jo e push thai jai to e simple array aetle tupel bannavva mate readonly keyword use.
