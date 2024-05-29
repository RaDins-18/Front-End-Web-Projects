/* QUESTION:

Write a program to calculate factorial of a number using reduce and using for loops

6! = 6*5*4*3*2*1

*/


// SOLUTION:

// This arror function gives factorial by reduce method.
const factorialWithReduce = num => {
    // Array.from method is used to get array from number keys and slice is used for removing 0 from array.
    let arr = Array.from(Array(num+1).keys()).slice(1);

    // Calculate factorial value by reduce method and return its value.
    return arr.reduce(function(a, b) {
      return a * b;
    }, 1);
}

// This arror function gives factorial by for loop.
const factorialWithLoop = num => {
    // Assign factorial variable by 1 value.
    let factorial = 1;
    // For loop for calculating factorial value.
    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }
    // Return factorial value.
    return factorial;
}

// This function gets number from html and add factorial to the html.
function get_number_add_number() {
    // number variable gets number from html.
    const number = Number(document.getElementById("number").value);

    // If the number variable actually have a numbers then the below code will be executing.
    if (number >= 0) {
        // Remove previous number from html.
        document.getElementById("number").value = "";

        // Insert factorial in the html by using factorialWithReduce function.
        document.getElementById("factorialWithReduce").textContent = `Factorial of ${number} by Reduce: ${factorialWithReduce(number)}`;
        // Insert factorial in the html by using factorialWithLoop function.
        document.getElementById("factorialWithLoop").textContent = `Factorial of ${number} by Loop: ${factorialWithLoop(number)}`;

        // Shows the factorial by reduce method in the browser console.
        console.log(factorialWithReduce(number));
        // Shows the factorial by loop in the browser console.
        console.log(factorialWithLoop(number));
    }
}