interface User {
    name: string,
    age: number,
    address?:{//if address is defined then you have to put its all keys unitl it is defined optional
        city: string,
        pincode?: number, //Opitonal user can either write it or not
    }
}

const user : User = {
    name: "Nandan",
    age: 21,
    address1:{
        city:"Delhi",
        pincode: 110053,
    }
}
function isLegal(user :User): boolean{
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

const ans = isLegal(user);

if(ans){
    console.log("Age is Legal")
}else{
    console.log("Age is not legal");
}