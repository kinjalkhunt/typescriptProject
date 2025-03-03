// How to create a class and also instance of class in TS 

// a class in terms of OOP is a bluePrint for creating objects
// a class is like a bluePrint for creating similar things 

// class ma jyare instance create karvi tyare te automatic constructor call thay jai che

class PersonData {
    name: string = "jaish"
    age: number = 12
    hobbies: string[] = ["cricket", "football", "tennis"]
} 

const PersonData1: PersonData = new PersonData()
console.log("person data : ", PersonData1.hobbies);



// class constructor example

class PersonDataCon {
    name: string 
    age: number
    hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name
        this.age = age
        this.hobbies = hobbies 
    }
} 

// PersonDataCon("jaish", 12, ["vollyBall", "painting", "coding"]) class instance value pass 

const PersonData2: PersonDataCon = new PersonDataCon("jaish", 12, ["vollyBall", "painting", "coding"])
const PersonData3: PersonDataCon = new PersonDataCon("poojan", 17, ["dirving" , "vollyBall", "cricket"])

console.log("person data : ", PersonData3);

