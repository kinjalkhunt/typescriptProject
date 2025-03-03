"use strict";
// typescript Generics : Generics meane reusable components
// Generics in typescript allow you to create reusable components or functions that can work with multiple data types.
function logAndReturn(value) {
    return value;
}
const numberResult = logAndReturn(42);
const StringResult = logAndReturn('hello, Generics!');
const BooleanResult = logAndReturn(true);
console.log("numberResult : ", numberResult);
console.log("StringResult : ", StringResult);
console.log("BooleanResult : ", BooleanResult);
// Generics example
function GenericsExample(value) {
    return value;
}
const numberResultGenerics = GenericsExample(23); // Generics ma ahi type specify no karvi to pan chale but at example
const StringResultGenerics = GenericsExample('hello welcome, Generics!');
const BooleanResultGenerics = GenericsExample(false);
console.log("numberResult Generics : ", numberResultGenerics);
console.log("StringResult Generics : ", StringResultGenerics);
console.log("BooleanResult Generics : ", BooleanResultGenerics);
// Generics example : 2
function GenericsExample1(a, b) {
    return [...a, ...b]; // Concatenating arrays properly
}
// function GenericsExample1<type extends number | string>(a: type, b: type): type {
//     return (a as any) + (b as any)
// }
// const numberResultGenerics1 = GenericsExample1(5, 10)
// const StringResultGenerics1 = GenericsExample1('hello,', 'Generics')
const numberResultGenerics1 = GenericsExample1([1, 2, 3], [4, 5, 6]);
const stringResultGenerics1 = GenericsExample1(['hello', 'welcome'], ['Generics', 'Typescript']);
console.log("numberResult Generics : ", numberResultGenerics1);
console.log("StringResult Generics : ", stringResultGenerics1);
