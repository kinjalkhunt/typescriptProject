// // function in id:number = 8 ae default value 
// function greet2(name:string, id:number = 8) {
//     return `welcome ${name} and your id is ${id}`
// }
// const emp = greet2("jaish")
// console.log("emp : ", emp);
// function in id?:number ae optional value
function greet2(name, id) {
    if (id) {
        return "welcome ".concat(name, " and your id is ").concat(id);
    }
    else {
        return "welcome ".concat(name);
    }
}
var emp = greet2("jaish");
var emp1 = greet2("jaish", 3);
console.log("emp : ", emp);
console.log("emp1 : ", emp1);
