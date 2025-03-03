// How to create a class and also instance of class in TS 
// a class in terms of OOP is a bluePrint for creating objects
// a class is like a bluePrint for creating similar things 
// class ma jyare instance create karvi tyare te automatic constructor call thay jai che
var PersonData = /** @class */ (function () {
    function PersonData() {
        this.name = "jaish";
        this.age = 12;
        this.hobbies = ["cricket", "football", "tennis"];
    }
    return PersonData;
}());
var PersonData1 = new PersonData();
console.log("person data : ", PersonData1.hobbies);
// class constructor example
var PersonDataCon = /** @class */ (function () {
    function PersonDataCon(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return PersonDataCon;
}());
// PersonDataCon("jaish", 12, ["vollyBall", "painting", "coding"]) class instance value pass 
var PersonData2 = new PersonDataCon("jaish", 12, ["vollyBall", "painting", "coding"]);
var PersonData3 = new PersonDataCon("poojan", 17, ["dirving", "vollyBall", "cricket"]);
console.log("person data : ", PersonData3);
