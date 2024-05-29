// QUESTION:

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
- ---> /
* ---> +
/ ---> **
** ---> *

It performs wrong operation 10% of the times */


// SOLUTION:

// Function that get only numbers.
function get_num(desc) {
    // While loop for continuously executing.
    while (true) {
        // Show pop-up.
        var num = prompt(desc, "0")
        // Change string into number.
        num = parseInt(num)
        // If input string is actually a number or numbers then return it, otherwise restart the loop.
        if (isNaN(num) == false) {
            return num
        }
    }
}

// Function that get only following operaotrs ( +    -    *    /    ** ).
function get_operator(desc) {
    // While loop for continuously executing.
    while (true) {
        // Operators that user selects.
        const operators = ["+", "-", "*", "/", "**"]
        // Show pop-up.
        var operator = prompt(desc, "+")
        // If input operator is in operators array then return it, otherwise restart the loop.
        if (operators.includes(operator)) {
            return operator
        }
    }
}

// Function that decides operations on these operaotrs ( +    -    *    /    ** ).
function functioning(operator, first_number, second_number) {
    // If operator is plus then perform plus operation and return value.
    if (operator == "+") {
        return first_number + second_number
    }
    // If operator is minus then perform minus operation and return value.
    if (operator == "-") {
        return first_number - second_number
    }
    // If operator is multiply then perform multiply operation and return value.
    if (operator == "*") {
        return first_number * second_number
    }
    // If operator is divide then perform divide operation and return value.
    if (operator == "/") {
        return first_number / second_number
    }
    // If operator is exponential then perform exponential operation and return value.
    if (operator == "**") {
        return first_number ** second_number
    }
}

// Convert correct operators to wrong Operators.
let wrong_operator = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
    "**": "*"
}

// Defining first_num variable by get_num function's value.
var first_num = get_num("First number?")
// Defining second_num variable by get_num function's value.
var second_num = get_num("Second number?")
// Defining oper variable by get_operator function's value.
var oper = get_operator("Select a operation:    +    -    *    /    **")

// Printing first number.
console.log("First number:", first_num)
// Printing second number.
console.log("First number:", second_num)
// Printing operator.
console.log("Operator:", oper)

// Defining p_10_p variable by 10% probability to perform wrong operation.
p_10_p = Math.floor(Math.random() * 10) + 1

// Printing probability.
console.log("Probability:", p_10_p)

// Get access to h1 and p element by id.
var h1 = document.getElementById("h1")
var p = document.getElementById("p")

// If probablity is 1 this code execute(10% of the times this code executed).
if (p_10_p == 1) {
    // Add the text of h1 and p element by textContent property.
    h1.textContent = `${first_num} ${oper} ${second_num} = ${functioning(oper = wrong_operator[oper], first_num, second_num)}`
    p.textContent = "Wrong"
}
// If probablity is 2 to 10 this code execute(90% of the times this code executed).
else{
    // Add the text of h1 and p element by textContent property.
    h1.textContent = `${first_num} ${oper} ${second_num} = ${functioning(oper, first_num, second_num)}`
    p.textContent = "Correct"
}