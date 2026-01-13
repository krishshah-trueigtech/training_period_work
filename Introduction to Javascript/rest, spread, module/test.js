const name = "Krish";
const day = "Tuesday";
const task = "JavaScript";

const message = "Hello " + name + ", today is " + day + " and we are learning " + task + ".";
console.log(message);
const backticksMessage = `Hello ${name}, today is ${day} and we are learning ${task}.`;
console.log(backticksMessage);

const fruits = ["apple","orange","mango"];
console.log(...fruits);

const user = {name: "Krish", role: "Dev"};
const newUser  = {...user,role:"Developer", city: "Indore"};

console.log(newUser);

function sum(...numbers){
    let result = 0;
    for(const num of numbers){
        result += num;
    }
    console.log(`The sum is ${result}`);
}

sum(1,2,3,4,5,6,7,8,8,10);