"use strict";
// data type
// // 1. boolean
// let ismybane:boolean = true
// let hasStarted:boolean = false
// // 2. isEven number 
// function isEven(a:number):boolean {
//     return a % 2 === 0
// }
// console.log(isEven(5));
// 3. bigint :- In JS we can't read the whole numbers beyond 2 raise to power 53
// const MAX_SAFE_INTEGER = 9007199254740991;
// let maxNumber = MAX_SAFE_INTEGER;
// console.log(maxNumber);
// ==> run karva mate => tsc --target ES2020 dataType.tsx
// let maxNumber:bigint = 9007199254740991n
// console.log(maxNumber);
// ==> run karva mate => tsc --target ES2020 dataType.tsx
let bigNumber = BigInt("90071992547409925");
console.log(bigNumber);
