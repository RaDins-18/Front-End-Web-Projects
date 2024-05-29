/*  QUESTION:

Create a business name generator by combining list of adjective and category and last word and also without using array.

Adjectives:
Crazy 
Amazing
Fire 

Categories:
Medicines
Foods
Garments

Last Words:
Bros
Limited
Hub

*/


//  SOLUTION:

// This function converts normal string to Title formate and return it.
function convert_to_title(string) {
    return string.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

// This function give a random number between (0 to number of words in string) and return it.
function get_random_int(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

// This function generate a business name with the help of (adjectives, category, lastWords) and return it.
function generate_name(category){
    // String that contains 50 unique adjectives.
    var adjectives = "crazy amazing fire epic awesome legendary phenomenal stellar electrifying thrilling explosive unstoppable trailblazing astonishing breathtaking unforgettable exhilarating electrifying unbelievable incredible sensational spectacular outstanding extraordinary fantastic incredible unparalleled supercharged marvelous dazzling fabulous remarkable unrivaled supreme invincible insane phenomenal astonishing unbeatable unbeatable unstoppable spectacular stratospheric electrifying phenomenal unforgettable unbelievable intense dynamite immense";

    // String that contains 50 unique businesses last words.
    var lastWords = "bros limited hub nexus innovate ventures dynamics solutions synergy catalyst apex fusion paradigm horizon edge velocity matrix network agile impact spectrum connect pathways summit pulse quest infinity vision core spark orbit momentum resonance evolution augment propel empower envision transform navigate vibrant resilience catalyze illuminate trailblaze strive ignite thrive fortify pioneer";
    
    // name variable firstly gets a random word from adjectives string by using get_random_int function and converts normal word to title formate by using convert_to_title function and a add white space.
    // Then name variable converts category word to title formate by using convert_to_title function and add a white space.
    // Then name variable lastly gets a random word from lastWords string by using get_random_int function and converts normal word to title formate by using convert_to_title function.
    // After that add all words respectively.
	var name = convert_to_title(adjectives.split(" ")[get_random_int(0, adjectives.split(" ").length)]) + ' ' + convert_to_title(category) + ' ' + convert_to_title(lastWords.split(" ")[get_random_int(0, lastWords.split(" ").length)]);

    // Return the name variable.
	return name;
}

// This function gets category from html and add business name to the html.
function get_name_add_name() {
    // category variable gets category from html.
    const category = document.getElementById("category").value;

    // If the category variable actually have a word then the below code will be executing.
    if (category != "") {
        // Remove previous category from html.
        document.getElementById("category").value = "";

        // Insert business name in the html by using generate_name function.
        document.getElementById("business_name").textContent = generate_name(category);

        // Shows the business name in the browser console.
        console.log(generate_name(category));
    }
}