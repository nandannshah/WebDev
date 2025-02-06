
//Defining an interface with  propreties name and age
interface User{
    name: string,
    age?:number, //Question mark marks this property as optional 
}

//using that interface to create an object
const nandan : User = {
    name : "Nandan",
}

console.log(nandan);

//Create a funciton which take argument as interface User
function greet1(user : User){
    console.log("Hello " + user.name);
}


//create a user object which will be pass as an argument to greet1 function
const user1 : User = {
    name:"Shah",
    age: 36,
}

greet1(user1)