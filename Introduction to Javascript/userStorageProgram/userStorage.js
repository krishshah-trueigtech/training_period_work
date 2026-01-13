const user = {
    userName: "user1",
    email: "abdc@gmail.com",
    age: 32,

    updateName: function(newUserName){
        this.userName = newUserName;
        console.log("User name updated");
        console.log("New name: " + user.userName);
    }
}

user.updateName("krish");
