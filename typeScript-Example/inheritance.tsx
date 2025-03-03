// Inheritance in TS 

// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

class PersonInheritance {
    name: string 
    age: number
    hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name
        this.age = age
        this.hobbies = hobbies 
    }

    introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. I Love ${this.hobbies.join(",")}.`
    }
} 

class StudentInheritance extends PersonInheritance{
    grade: number

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade 
    }
    introduce(): string {
        return ` ${super.introduce()} I am in grade ${this.grade}.`
    }
}

const PersonInheritanceData: PersonInheritance = new PersonInheritance("jaish", 12, ["vollyBall", "painting", "coding"])
const StudentInheritance1: PersonInheritance = new StudentInheritance("poojan", 17, ["dirving" , "vollyBall", "cricket"], 10)

// console.log("Person without Inheritance data : ", PersonInheritanceData.introduce());

console.log("Student with Inheritance data : ", StudentInheritance1.introduce());




