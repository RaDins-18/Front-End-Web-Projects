/* QUESTION:
        Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
*/


// SOLUTION:

// Select all boxes div by .querySelectorAll(".box").
let boxes = document.body.querySelectorAll(".box");
// Selects container div by .querySelector(".container").
let container = document.body.querySelector(".container");

// Arrow function that generates a random number.
let r_n = () => {
    // num variable generate numbers between 0 to 255
    let num = Math.floor(Math.random() * 256);
    // return num variable.
    return num;
}

// Change the background color of container div.
container.style.backgroundColor = `rgb(${r_n()}, ${r_n()}, ${r_n()})`;

// for loop for selecting each box div.
for (let i = 0; i < boxes.length; i++) {
    // Change the border of box div.
    boxes[i].style.border = `5px solid rgb(${r_n()}, ${r_n()}, ${r_n()})`;
    // Change the background color of box div.
    boxes[i].style.backgroundColor = `rgb(${r_n()}, ${r_n()}, ${r_n()})`;
    // Change the color of box div.
    boxes[i].style.color = `rgb(${r_n()}, ${r_n()}, ${r_n()})`;
}