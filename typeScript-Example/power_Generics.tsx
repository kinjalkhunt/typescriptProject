// Power Generics typescript

function PowerGenerics<T, U12>(a: T, b: U12, c?: boolean): void { // power generics T and U. multiple type variable
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

PowerGenerics(5, 'hello')
PowerGenerics('Generics', 10)
// PowerGenerics('Generics', 576, true)