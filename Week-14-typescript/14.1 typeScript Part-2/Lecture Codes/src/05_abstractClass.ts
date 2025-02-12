abstract class User1{
    name: string
    constructor(name:string){
        this.name = name;
    }

    abstract greet2 : () => string;  //methid should be abstract

    hello(){
        console.log("Hii") // abstract class can have default implementation of mehtods
    }
}

class Employee2 extends User1{
    name : string
    
    constructor(name:string){
        super(name);
        this.name = name
    }

    greet2 = () => {
        return "Hi from abstract method"
    }
}