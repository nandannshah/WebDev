interface Person{
    name : string,
    age: number,

    greet3 : () => string,

    // greet3(): string,  //this is also correct
}

const person : Person = {
    name : "Nandan",
    age: 21,
    greet3: () => {
        return "Hi"
    }
}

console.log(person.greet3());