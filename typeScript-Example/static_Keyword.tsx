// ****************************** static properties keyword ****************************** //

// Static properties : In typescript, static method and properties belong to the class itself rather
// than to instances of the class. By marking a method or property static, we can access them directly
// from the class without needing to create an instance of the class. this is useful for utility functions
// or properties that don't rely on instance-specific data.
 
class PersonStaticMethod {
    public static PI: number = Math.PI

    public static add(num1: number, num2: number) {
        return num1 + num2
    }

    public static subs(num1: number, num2: number) {
        return num1 - num2
    }
}

console.log("Static properties : ", PersonStaticMethod.PI);
console.log("Static properties : ", PersonStaticMethod.add( 10, 5 ));
console.log("Static properties : ", PersonStaticMethod.subs( 10, 5 ));


