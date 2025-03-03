// ************ Getter and Setter ************
// getter and setter method :  In TypeScript, classes, you can set getter And setter methods to Control the access and modification of class 
// properties. Getter method allow you to retrieve the value of property, while setter method allow you to set the
// value of property with additional logic or validation.

// class personGetterSetter {
//     private _age: number | undefined
//     constructor( public name: string, protected hobbies: string[] ) {}

//     public set age(age: number) {
//         if(this.age > 12 || this.age < 0){
//             throw new Error("Age is not valid")
//         } else {
//             console.log("Age is valid");
//         }
//         this._age = age
//     }

//     public get age(): number {
//         if(this._age === undefined) {
//             throw new Error("Age is not defined")
//         }
//         return this._age
//     }

//     introduceAc1(): string {
//         return `Hi, my name is ${this.name} and I am ${this._age} years old. I Love ${this.hobbies.join( "," )}.`
//     }
// }

// const personGetterSetter1: personGetterSetter = new personGetterSetter( "jaish", [ "vollyBall", "painting", "coding" ] )

// personGetterSetter1.age = 16
// console.log( "class Shorthand personGetterSetter1 ", personGetterSetter1.introduceAc1() );




// ******************** Bank Account Example in getter and setter method ********************* //

// class BankAccount {
//     private _balance: number = 0

//     public get balance(): number {
//         return this._balance
//     }

//     public set balance(amount: number) {
//         if(amount < 0) {
//             throw new Error("Invalid Balance")
//         }
//         this._balance = amount
//     }
// }

// const account = new BankAccount()
// account.balance = -10 // 10 enter to log show 

// console.log("Account Balance : ", account.balance); 




// ********************** Temperature Example in getter and setter method *********************** //

class Temperature {
    private _celcius: number = 0

    public get celcius(): number {
        return this._celcius
    }

    public set celcius(value: number) {
        this._celcius = value
    }

    public get fahrenheit(): number {
        return (this._celcius * 9) / 5 + 32
    }

    public set fahrenheit(newFah: number) {
        this._celcius = ((newFah - 32) * 5) / 9
    }
}

const temp = new Temperature()
temp.celcius = 25
temp.fahrenheit = 78

console.log("Temperature in Celcius : ", temp.fahrenheit);
console.log("Temperature in Fahrenheit : ", temp.celcius);



