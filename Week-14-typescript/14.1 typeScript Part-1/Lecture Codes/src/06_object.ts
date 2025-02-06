function greet(user :{
    name: string,
    age: number,
}){
    console.log("Hello "+ user.age);
}
//WE can call by this directly
// greet({
//     name:"Nandan",
//     age: 21,
// })

let user = {
    name:"Nandan",
    age: 22,
}

greet(user);