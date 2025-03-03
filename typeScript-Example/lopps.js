// loop in type script
var fruitsLoop = ["apple", "banana", "mango", "orange"];
for (var i = 0; i < fruitsLoop.length; i++) {
    console.log("i */-/*/*-", fruitsLoop[i]);
}
// forEach loop
fruitsLoop.forEach(function (curVal) { return console.log("curVal", curVal); });
var arr = [1, 2, 3, 4];
// for in loop
for (var index in arr) {
    console.log("index : ", index);
}
// for of loop
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log("value : ", value);
}
