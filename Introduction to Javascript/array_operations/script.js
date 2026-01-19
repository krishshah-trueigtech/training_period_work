let users = [{ id: 1, name: "A", active: true }];
const newUser = {id: 3, name: "ad", acrive: false};

function addUsers(userData,users){
    
    const newUsers = [...users,userData];
    return newUsers;
};


console.log(addUsers(newUser,users));
console.log(addUsers(newUser,users));
console.log(addUsers(newUser,users));

function editUser(id){
    
}