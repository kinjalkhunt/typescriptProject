// typescript Generics : Generics meane reusable components
// Generics in typescript allow you to create reusable components or functions that can work with multiple data types.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function logAndReturn(value) {
    return value;
}
var numberResult = logAndReturn(42);
var StringResult = logAndReturn('hello, Generics!');
var BooleanResult = logAndReturn(true);
console.log("numberResult : ", numberResult);
console.log("StringResult : ", StringResult);
console.log("BooleanResult : ", BooleanResult);
// Generics example
function GenericsExample(value) {
    return value;
}
var numberResultGenerics = GenericsExample(23); // Generics ma ahi type specify no karvi to pan chale but at example
var StringResultGenerics = GenericsExample('hello welcome, Generics!');
var BooleanResultGenerics = GenericsExample(false);
console.log("numberResult Generics : ", numberResultGenerics);
console.log("StringResult Generics : ", StringResultGenerics);
console.log("BooleanResult Generics : ", BooleanResultGenerics);
// Generics example : 2
function GenericsExample1(a, b) {
    return __spreadArray(__spreadArray([], a, true), b, true); // Concatenating arrays properly
}
// function GenericsExample1<type extends number | string>(a: type, b: type): type {
//     return (a as any) + (b as any)
// }
// const numberResultGenerics1 = GenericsExample1(5, 10)
// const StringResultGenerics1 = GenericsExample1('hello,', 'Generics')
var numberResultGenerics1 = GenericsExample1([1, 2, 3], [4, 5, 6]);
var stringResultGenerics1 = GenericsExample1(['hello', 'welcome'], ['Generics', 'Typescript']);
console.log("numberResult Generics : ", numberResultGenerics1);
console.log("StringResult Generics : ", stringResultGenerics1);
