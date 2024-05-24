

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Undefined!";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            throw new Error("Invalid operator");
    }
    return result;
}

function resetCalculator() {
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
    document.getElementById("result").value = "0";
}

function updateDisplay(value) 
{
    const display = document.getElementById("result");
    display.value = value;
}

document.addEventListener("DOMContentLoaded", () => 
{
    const buttons = document.querySelectorAll("button");
    const clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", () => 
    {
        resetCalculator();
    });

    buttons.forEach(button => 
    {
        button.addEventListener("click", () =>
        {
            const buttonValue = button.innerText;
            if (button.classList.contains("number") || button.classList.contains("decimal")) {
                if (operator) {
                    num2 += buttonValue;
                    displayValue = num2;
                } else {
                    num1 += buttonValue;
                    displayValue = num1;
                }
            } else if (button.classList.contains("operator")) {
                if (num1 && num2 && operator) {
                    const result = operate(operator, num1, num2);
                    num1 = result.toString();
                    num2 = "";
                    displayValue = num1;
                }
                operator = buttonValue;
            } else if (button.classList.contains("equals")) {
                if (num1 && num2 && operator) {
                    const result = operate(operator, num1, num2);
                    displayValue = result.toString();
                    num1 = result;
                    num2 = "";
                    operator = "";
                }
            }
            updateDisplay(displayValue);
        });
    });
});

