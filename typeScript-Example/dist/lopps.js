"use strict";
// loop in type script
const fruitsLoop = ["apple", "banana", "mango", "orange"];
for (let i = 0; i < fruitsLoop.length; i++) {
    console.log("i */-/*/*-", fruitsLoop[i]);
}
// forEach loop
fruitsLoop.forEach((curVal) => console.log("curVal", curVal));
const arr = [1, 2, 3, 4];
// for in loop
for (const index in arr) {
    console.log("index : ", index);
}
// for of loop
for (const value of arr) {
    console.log("value : ", value);
}
