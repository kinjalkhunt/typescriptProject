// A typeOf guard in TypeScript lets you narrow down the type of a variable based on its runtime value. In TypeScript
// type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain
//  circumstances. this is particularly useful with union types and generics types.
var favHobbies = function (hobby) {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function (data) { return console.log(data); });
    }
    else {
        return console.log(hobby);
    }
};
favHobbies("vollyBall");
favHobbies(["vollyBall", "painting", "coding"]);
