function isLegal(age: number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(19));