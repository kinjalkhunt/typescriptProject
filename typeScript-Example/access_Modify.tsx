//            |     parent class     |      child class      |       Outside class
// Public     |         ✓            |            ✓          |             ✓
// Protected  |         ✓            |            ✓          |             x
// Private    |         ✓            |            x          |             x

class PersonAc { // parent class
    public name: string
    protected age: number
    private hobbies: string[]

    constructor( name: string, age: number, hobbies: string[] ) {
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }

    introduceAc(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. I Love ${this.hobbies.join( "," )}.`
    }

    getHobbies(): string[] {
        return this.hobbies;
    }
    getAge(): number {
        return this.age
    }
}

class StudentAc extends PersonAc { // child class
    grade: number

    constructor( name: string, age: number, hobbies: string[], grade: number ) {
        super( name, age, hobbies )
        this.grade = grade
    }
    introduceAc(): string {
        return ` ${super.introduceAc()} I am in grade ${this.grade}.`
    }
}

const PersonAC: PersonAc = new PersonAc( "jaish", 12, [ "vollyBall", "painting", "coding" ] )

// console.log("Person without Inheritance data : ", PersonInheritanceData.introduce());

console.log( "Student with Inheritance data : ", PersonAC.getAge() );


const StudentAc1: StudentAc = new StudentAc( "Harsh", 20, [ "cricket", "Sports" ], 10 );

console.log( "Student Acess modify ", StudentAc1.getHobbies() );
console.log( "Student Acess modify ", StudentAc1.introduceAc() );






// class PersonAc { // parent class
//     public name: string
//     protected age: number
//     private hobbies: string[]
//     public name1: string
//     protected age1: number
//     private hobbies1: string[]

//     constructor( name: string, age: number, hobbies: string[], name1: string, age1: number, hobbies1: string[] ) {
//         this.name = name
//         this.age = age
//         this.hobbies = hobbies
//         this.name1 = name1
//         this.age1 = age1
//         this.hobbies1 = hobbies1
//     }
// }
// ********************** short code (Shorthand Properties in Classes) *********************** //

class PersonAc1 {
    constructor( public name: string, public age: number, protected hobbies: string[] ) { }
    introduceAc1(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. I Love ${this.hobbies.join( "," )}.`
    }
}

class StudentAc2 extends PersonAc1 {
    constructor( name: string, age: number, hobbies: string[], public grade: number ) {
        super( name, age, hobbies )
    }
    introduceAc1(): string {
        return ` ${super.introduceAc1()} I am in grade ${this.grade}.`
    }
}
const PersonAC2: PersonAc1 = new PersonAc1( "jaish", 12, [ "vollyBall", "painting", "coding" ] )
const StudentAc3: StudentAc2 = new StudentAc2( "Harsh", 20, [ "cricket", "Sports" ], 10 )

console.log("class Shorthand PersonAC2 ", PersonAC2.introduceAc1());

console.log("class Shorthand StudentAc3 ", StudentAc3.introduceAc1());


