interface Address{
    city: string,
    pincode?:number,
}

interface User {
    name: string,
    age: number,
    address1: Address,
}

interface Manager{
    name: string,
    age: number,
    address1: Address,
}

const user1: User = {
    name: "Nandan",
    age: 21,
    address1: {
        city: "Delhi",
        pincode: 110053,
    }
}

console.log(user1.address1);