import {createCounter} from "./stateManagement.js";

const counter = createCounter();
console.log(counter.getValue());
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());