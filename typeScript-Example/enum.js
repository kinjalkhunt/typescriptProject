// Enums in Typescript : enums in typescript are commonly used when you want to represent a set of related values 
// and choose one value from multiple options. Enums provide a convenient way to define a set of named values
// and associate them with specific meanings.
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
})(Role || (Role = {}));
var user1 = {
    name: "John Doe",
    email: "abcd12@gmail.com",
    password: "Abcd123",
    role: Role.admin
};
var user2 = {
    email: "xyzzzz2@gmail.com",
    password: "Abcd123",
    role: Role.user
};
var isAdmin = function (user1) {
    var email = user1.email, role = user1.role;
    return role === "admin" ? "".concat(email, " is allowed") : "".concat(email, " is not allowed");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
