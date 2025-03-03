// typescript object : Let's consider a real-life example of representing a person's information using typescript object.

const personObject: {
    name: string,
    age: number,
    isStudent: boolean,
    address: {
        city: string,
        country: string
    }
} = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
}
// personObject.address.country = 123; // Error: Type '123' is not assignable to type 'string'.
personObject.address.country = 'Nepal'

console.log(personObject.address.city);
console.log(personObject.isStudent);






// type alias : In Typescript, a type alias is a way to give a name to a specific type or a combination of types.
// It allows you to create a custom name for a type, making it easier to reuser and refer to the same type in different parts of your code.
// type aliases provide better readability, oraganization, and abstraction of complex types. 

// To define a type alias, you use the type keyword followed by the alias name and the type definition.


type PersonObjectsTypeAlias = {
    name: string,
    age: number,
    isStudent: boolean,
    class?: string, // optional property
    address: { city: string, country: string }
}

const personObject1: PersonObjectsTypeAlias = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    class: '10th',
    address: {
        city: 'Surat',
        country: 'India'
    }
}

const personObject2: PersonObjectsTypeAlias = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
}

const personObject3: PersonObjectsTypeAlias = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
}

const personObject4: PersonObjectsTypeAlias = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
}

console.log('type alias : ', personObject1.address.city);
console.log('type alias : ', personObject1.class);




// alias for function use 

type Product = {
    product_name: string,
    price: number,
    quntity: number
}
const product: Product = {
    product_name: 'Laptop',
    price: 1000,
    quntity: 5
}

const ProductDetails = (product: Product) => {
    return `${product.product_name} total cost ${product.price * product.quntity}`;
}

console.log(ProductDetails(product));


