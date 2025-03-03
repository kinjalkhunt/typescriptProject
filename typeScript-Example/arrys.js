// Array in Typescript
var arrnum = [1, 2, 3, 4, 5];
var arrstr = ["hello", "welcome", "surat"];
var arrboth = ["hello", 1, "welcome", 2, "surat", 3, 4];
// using the Array constructor
var arrayConstructor = new Array(1, 2, 3, 4, 5, 6);
// using the Array.of method 
// const names:string[] = Array.of("hello", "welcome", "surat")
var names = ["hello", "welcome", "surat"];
console.log(names[1]);
console.log("length", names.length);
// using the Array.push method 
var fruits = ["apple", "banana", "mango", "orange"];
var updateFruits = fruits.push("Kiwi");
console.log("fruits.push", fruits);
var updateFruits1 = fruits.pop();
console.log("fruits.pop", fruits);
var updateFruits3 = fruits.unshift("Kiwi");
console.log("fruits.unshift", fruits);
var updateFruits2 = fruits.shift();
console.log("fruits.shift", fruits);
