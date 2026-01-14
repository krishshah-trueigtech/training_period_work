function fetchDB(id){
    return new Promise((resolve,reject) =>{
        console.log("Searching database...");

        setTimeout(()=>{
            const users = {
                1:{name: "krish", role: "developer"},
                2:{name: "ved", role: "pixie"},
            };
            const user = users[id];

            if(user){
                resolve(user);
            }else{
                reject(new Error("User not found in database"));
            }
        },1500)
    });
}

fetchDB(1)
    .then(userData => {
        console.log(`Success ${userData.name}`);
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    })
    .finally(()=>{
        console.log("complete")
    });