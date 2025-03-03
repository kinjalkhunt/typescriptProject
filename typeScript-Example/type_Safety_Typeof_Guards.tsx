// A typeOf guard in TypeScript lets you narrow down the type of a variable based on its runtime value. In TypeScript
// type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain
//  circumstances. this is particularly useful with union types and generics types.

const favHobbies: ( hobby: string | string[] ) => void = ( hobby: string | string[] ) => {
    if ( typeof hobby === "object" && Array.isArray( hobby ) ) {
        return hobby.map(( data ) => console.log( data ))
    } else {
        return console.log( hobby )
    }
}

favHobbies( "vollyBall" )
favHobbies( [ "vollyBall", "painting", "coding" ] )


