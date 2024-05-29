/* QUESTION:
Create a hacking simulator which has black background, green color and it shows these messages with random delay of 1 to 7 seconds.
    
>>> Initializing Hacking...
>>> Reading your Files...
>>> Password files Detected...
>>> Sending all passwords and personal files to server...
>>> Cleaning up...

The three dots must blink so that it looks like a real terminal
*/


// SOLUTION:

// blinkDot function can blink the dots.
const blinkDot = async () => {
    // setInterval for reapeat and run it after 0.3 sec and return it.
    return setInterval(() => {
        // lastE variable gets the last element in the .container div.
        let lastE = document.body.querySelector(".container").lastElementChild;

        // If Element has 3 dots in the end then remove all three dots otherwise add 1 dot at the last of the element.
        if (lastE.innerHTML.endsWith("...")) {
            // Remove 3 dots from end of the element.
            lastE.innerHTML = lastE.innerHTML.slice(0, lastE.innerHTML.length-3);
        } else {
            // Add 1 dot in the end of the element.
            lastE.innerHTML = lastE.innerHTML + ".";
        }
    }, 333.33);
}

// randomDelay function delays for a random time period.
const randomDelay = async () => {
    // Return a promise.
    return new Promise((resolve, reject) => {
        // Get a random number between 3 to 10.
        let timeout = Math.floor(3 + (Math.random()  * 8)) * 1000;

        // setTimeout for delay a random time period.
        setTimeout(() => {
            // If random time period is 3 to 9 then resolve it, Otherwise reject it.
            if (timeout < 10000) {
                resolve("Completed");
            } else {
                // Alert a message if the scirpt it failed.
                alert("Process is failed.");
                reject("Failed");
            }
        }, timeout);
    })
}

// addText function can add text into the HTML.
const addText = async (text) => {
    // Get .container div element from HTML.
    let div = document.body.querySelector(".container");
    // Create a new element by p tag.
    let p = document.createElement("p");
    // Add text into p tag.
    p.innerHTML = `>>> ${text}`;
    // Insert p tag into div element in the HTML.
    div.append(p);

    // After add the text into the HTML wait for random time period by radomDelay function.
    await randomDelay(text);
}

// count function can tells that how many times a character is present in string.
const count = (s, c) => {
    // Assign res variable with initial value of 0.
    let res = 0;

    // For loop for checking every character of string.
    for (let i = 0; i < s.length; i++) {
        // Check character equal to string character.
        if (s.charAt(i) == c)
        // If character is matched with string's character then add 1 in res variable.
        res++;
    } 

    // Return res variable.
    return res;
}

// main function gather other functions and execute them.
async function main() {
    // blinkDot function for blinking dots in the text.
    await blinkDot()

    // List of all messages.
    let texts = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up",
    ];
    
    // For loop for running addText function on each message.
    for (const text of texts) {
        // addText function for add text into the HTML.
        await addText(text);

        // Get last element from .container div in HTML.
        let lastE = document.body.querySelector(".container").lastElementChild;
        // chr variable tells number of dots present in message.
        let chr = count(lastE.innerText, ".");
        
        // If message contains 0 dot then execute the code below.
        if (chr == 0) {
            // Add 3 dots in the end of message.
            lastE.innerHTML = lastE.innerHTML + "...";
        }
        // If message contains 1 dot then execute the code below.
        if (chr == 1) {
            // Add 2 dots in the end of message.
            lastE.innerHTML = lastE.innerHTML + "..";
        }
        // If message contains 2 dot then execute the code below.
        if (chr == 2) {
            // Add 1 dot in the end of message.
            lastE.innerHTML = lastE.innerHTML + ".";
        }
    }

    // When all the messages execute successfully then alert a message.
    alert("Your account is Hacked.");
}

// Run the main function.
main()