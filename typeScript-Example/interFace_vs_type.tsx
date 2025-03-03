// ********************* Interface vs Type ********************* // 

// 1. 
// Use custom types when you need unions, intersections, or mapped types.
// Use interfaces when defining object shapes or classes that adhere to a contract.

// 2.
// Interfaces can extend other interfaces to inherit their members.
// custom types can use unions and intersections for more complex type composition.

// 3.

// type example
type Stud = {
    name: string,
    age: number,
} 

type StuAddress = {
    city: string,
    state: string,
}

// Like 
// type Data = Stud | StuAddress
// type Data = Stud & StuAddress
// const BioData: Data = {

const BioData: Stud & StuAddress = {
    name: "jaish",
    age: 19,
    city: "Surat",
    state: "Gujarat"
}

console.log("custom type : ", BioData);



// interface example in variable
interface Stud1 {
    name: string,
    age: number,
} 

interface StuAddress1 {
    city: string,
    state: string,
}

// Like 
interface Data1 extends Stud1 , StuAddress1 {}
// const BioData: Data1 = {

const BioData1: Data1 = {
    name: "jaish",
    age: 19,
    city: "Surat",
    state: "Gujarat"
}

console.log("custom interface variable : ", BioData1);



// interface example in classes
interface CompanyData {
    CompanyName: string,
    id: number,
} 

interface StuAddress2 {
    role: string,
    Cstaff: number,
}

// Like 
interface Data2 extends CompanyData , StuAddress2 {}
// const BioData: Data1 = {

class BioData2 implements Data2 {
    constructor(public CompanyName: string, public id: number, public role: string, public Cstaff: number) {}
}

const BioDataa = new BioData2("Weetech Solution", 878654, "Frontend Developer", 25)

console.log("custom interface classes : ", BioDataa);


