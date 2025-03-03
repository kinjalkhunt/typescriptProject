// Array in Typescript

const arrnum: number[] = [1, 2, 3, 4, 5];

const arrstr: string[] = ["hello", "welcome", "surat"]

const arrboth: (string | number)[] = ["hello", 1, "welcome", 2, "surat", 3, 4]

// using the Array constructor

const arrayConstructor:number[] = new Array(1, 2, 3, 4, 5, 6)


// using the Array.of method 

// const names:string[] = Array.of("hello", "welcome", "surat")
const names: string[] = ["hello", "welcome", "surat"];
console.log(names[1]);
console.log("length",names.length);


// using the Array.push method 
const fruits = ["apple", "banana", "mango", "orange"]
const updateFruits = fruits.push("Kiwi")
console.log("fruits.push", fruits);

const updateFruits1 = fruits.pop()
console.log("fruits.pop", fruits);

const updateFruits3 = fruits.unshift("Kiwi")
console.log("fruits.unshift", fruits);

const updateFruits2 = fruits.shift()
console.log("fruits.shift", fruits);


