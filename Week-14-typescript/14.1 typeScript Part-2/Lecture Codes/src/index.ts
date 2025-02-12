
//This function will return a boolean value
function isEven( num:number): boolean{
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}

function greet1(name: string): string{
    return "Hello " + name;
}

const greeting = greet1("Nandan");
console.log(greeting) 

