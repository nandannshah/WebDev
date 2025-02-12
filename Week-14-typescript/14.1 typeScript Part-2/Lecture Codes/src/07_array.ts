interface User6{
    firstName: string,
    lastName: string,
    age: number,
}

function filterUsers(users: User6[]){
    let ans = []
    for(let i = 0; i<users.length; i++){
        if(users[i].age<18){
            ans.push(users);
        }
    }
    return ans;
}
const filteredUser = filterUsers([{

    firstName: "Nandan",
    lastName: "Shah",
    age: 10
}
])
console.log(filteredUser);