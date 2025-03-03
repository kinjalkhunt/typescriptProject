"use strict";
// function typescript
//fun() define
// function addition(a, b):number {
// @ts-ignore  :- addition function in error like Duplicate function implemention 
function addition(a, b) {
    return a + b;
}
// fun() call
addition(5, 10);
console.log("addition : ", addition(5, 10));
// console.log("addition : ",addition(5, "jaish"));
//  ==> function declaration means function define karna 
// function invocation 
// function greet(name:string, id:number) {
//     console.log(`welcome ${name} and your id is ${id}`);
// }
// const greet = (name:string, id:number) => {
//     console.log(`welcome ${name} and your id is ${id}`);
// }
// greet("jaish", 1)
// function return type
// function greet(namer: string, id: number):string {
//     return `welcome ${namer} and your id is ${id}`;
//  }
//  const myGreet = greet("jaish", 1);
//  console.log(myGreet);
// TODO practice time
// ? write a function called ispalindrome  that takes a string as a parameter
// and return true if the string is a palindrome(reads the same forwords and
// backwords), and false otherwise.
// const ispalindrome = (palin:string):boolean => {
//     let mypalin = palin.split("").reverse().join("")
//     return mypalin === palin
// }
// // ispalindrome("12321")
// console.log(ispalindrome("12321"));
// function array use
// const ispalindrome = (palin:number[]) => {
//     let mypalin = Math.max(...palin)
//     return mypalin
// }
// console.log("maximum number : ", ispalindrome([1, 16, 8, 12, 2, 7, 23, 5]));
const findMaxNumber = (numbers) => {
    let values = Object.keys(numbers).map(key => numbers[key]);
    let maxNumber = Math.max(...values);
    return maxNumber;
};
const numberObject = { a: 1, b: 16, c: 8, d: 12, e: 2, f: 7, g: 23, h: 5 };
console.log("Maximum number:", findMaxNumber(numberObject));
