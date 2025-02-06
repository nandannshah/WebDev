function delayedCall(func: () => void){
    setTimeout(func, 1000);
}

function func(){
    console.log("Hello Nandan");
}

delayedCall(func);