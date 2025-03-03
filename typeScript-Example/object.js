// typescript object : Let's consider a real-life example of representing a person's information using typescript object.
var personObject = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
};
// personObject.address.country = 123; // Error: Type '123' is not assignable to type 'string'.
personObject.address.country = 'Nepal';
console.log(personObject.address.city);
console.log(personObject.isStudent);
var personObject1 = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    class: '10th',
    address: {
        city: 'Surat',
        country: 'India'
    }
};
var personObject2 = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
};
var personObject3 = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
};
var personObject4 = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    address: {
        city: 'Surat',
        country: 'India'
    }
};
console.log('type alias : ', personObject1.address.city);
console.log('type alias : ', personObject1.class);
var product = {
    product_name: 'Laptop',
    price: 1000,
    quntity: 5
};
var ProductDetails = function (product) {
    return "".concat(product.product_name, " total cost ").concat(product.price * product.quntity);
};
console.log(ProductDetails(product));
