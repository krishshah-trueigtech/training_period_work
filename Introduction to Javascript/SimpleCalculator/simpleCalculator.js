function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0) return "Cannot divide by zero";

    return a / b; 
}

function calculate(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operationNumber = parseInt(document.getElementById("operationNumber").value);
    const resultElement = document.getElementById("result");
    if(operationNumber < 1 || operationNumber > 4) return "Please select valid operation number";
    
    let result;

    switch(operationNumber){
        case 1:
            result = add(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = divide(num1, num2);
            break;
    }
    resultElement.innerText = "Answer: " + result; 
}