// array map function 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleData: number[] = numbers.map((Data: number) => Data * 2);
console.log("double data: ", doubleData);

const doubleData123:string[] = numbers.map((Data: number) => Data.toString());
console.log("double data: ", doubleData123);

const doubleData111: boolean[] = numbers.map((Data: number) => Data > 2);
console.log("double data: ", doubleData111);




// filter function

const doubleDataFilter: number[] = numbers.filter((Data: number) => Data % 2 === 0);
console.log("double data: ", doubleDataFilter);

const filData = ['alice', 'apple', 'orange', 'banana', 'alldata', 'bomb']
const filterLetter = 'b'; 
const DataFilter: string[] = filData.filter((Data: string) => Data.charAt(0).toLowerCase() === filterLetter);
console.log("double data: ", DataFilter);
