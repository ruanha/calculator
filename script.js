let displayValue = document.querySelector("#display")
let num1 = "";
let num2 = "";
let operator = "";
let currentTotal = "";

function reset() {
    num1 = "";
    num2 = "";
    operator = "";
    clearDisplay();
}

function clearDisplay(){
    displayValue.innerHTML = ""
}

function updateDisplay(input) {
    if (displayValue.innerHTML.length < 15){
        displayValue.append(input)
    }
}

function calculate(e){
    result = operate(operator, num1, num2)
    return result;
}

// the clear button
const clear = document.querySelector("#clear");
clear.addEventListener('click', (e)=>{
    reset();
});


// number buttons
const numbers = document.querySelectorAll('.number');

numbers.forEach((button) => {
    button.addEventListener('click', (e)=>
    {
        if (e.target['id']!= "dot" || !displayValue.innerHTML.includes(".")) {

            if (!operator) {
                num1 += e.target.innerHTML
            } else {
                num2 += e.target.innerHTML
            }
            updateDisplay(e.target.innerHTML);
        }
    })
})

//operator buttons
const operators = document.querySelectorAll('.operator');

operators.forEach((button) => {
    button.addEventListener('click', (e)=>
    {
        if (num1 && !num2 && !operator) {
            operator = e.target.innerHTML;
            clearDisplay();
        }
    })
})

//the equal button
const equal = document.querySelector("#equal");
equal.addEventListener('click', (e)=>{
    result = calculate(e);
    tempResult = result;
    reset();
    if (tempResult%1>0){
        displayValue.innerHTML = tempResult.toFixed(12);
    } else displayValue.innerHTML = tempResult;
    num1 = tempResult;
});

//the undo button
const undo = document.querySelector("#undo")
undo.addEventListener('click', (e)=>{
    if (num1 && !num2) {
        num1 = num1.slice(0, -1);
    } else if (num1 && num2) {
        num2 =  num2.slice(0, -1);
    }
    displayValue.innerHTML = displayValue.innerHTML.slice(0, -1);
})

// operate function

function operate(operator, a, b) {
    console.log(operator);
    switch (operator){
        case "+":
        return add(a, b);
        break;

        case "-":
        return subtract(a,b);
        break;

        case "*":
        return multiply(a,b);
        break;

        case "/":
        return divide(a, b);
        break;

        default:
        reset();
    }
}

//operations
function add (a, b) {
    return +a + +b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}

function power(a, b) {
    return a**b;
}

function factorial(a) {
    if (a == 0) return 1;

    let array = [];
    for (let i = 1; i<=a; i++) {
        array.push(i);
    }
    return multiply(array);
}