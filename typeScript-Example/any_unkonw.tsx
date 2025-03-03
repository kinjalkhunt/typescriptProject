// 1. any
// let nums:any = 5
// nums = "hello"
// nums = true

// console.log("nums :", nums);

// 2. unknown 
let numUnkonw:unknown
numUnkonw = 10
numUnkonw = "hello"
numUnkonw = false

if(typeof numUnkonw === "number") {
    console.log(numUnkonw + 5);
} else if(typeof numUnkonw === "boolean") {
    console.log("numUnkonw :", numUnkonw)
}



// async function fechData():Promise<unknown> { 
//     const response = await fetch('https://api.example.com/data')
//     const data = await response.json()
//     return data
// }

// async function procesData() {
//     const response = await fechData()

//     if(typeof response === "object"){
//         console.log("hello, wellcome surat");
//     }
// }

