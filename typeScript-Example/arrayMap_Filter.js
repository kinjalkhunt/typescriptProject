// array map function 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubleData = numbers.map(function (Data) { return Data * 2; });
console.log("double data: ", doubleData);
var doubleData123 = numbers.map(function (Data) { return Data.toString(); });
console.log("double data: ", doubleData123);
var doubleData111 = numbers.map(function (Data) { return Data > 2; });
console.log("double data: ", doubleData111);
// filter function
var doubleDataFilter = numbers.filter(function (Data) { return Data % 2 === 0; });
console.log("double data: ", doubleDataFilter);
var filData = ['alice', 'apple', 'orange', 'banana', 'alldata', 'bomb'];
var filterLetter = 'b';
var DataFilter = filData.filter(function (Data) { return Data.charAt(0).toLowerCase() === filterLetter; });
console.log("double data: ", DataFilter);
