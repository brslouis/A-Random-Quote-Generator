/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  { quote: 'Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.', source: 'Frank Zappa', citation: 'The Real Frank Zappa Book', year: 1989, tags: 'music'},
  { quote:'Love is or it ain\'t. Thin love ain\'t love at all.', source: 'Toni Morrison', citation: 'Beloved', year: 1987, tags: ''},
  { quote:'I am not afraid of storms, for I am learning how to sail my ship', source: 'Louisa May Alcott', citation: 'Little Women', year: 1869, tags:''},
  { quote:'It\'s the possibility of having a dream come true that makes life interesting.', source: 'Paulo Coelho', citation: 'The Alchemist', year: 1988, tags: ''},
  { quote:'There is always something left to love', source: 'Gabriel Garcia Marquez', citation: 'One Hundred Years of Solitude', year: 1967, tags: ''},
  { quote:'What\'s the point of having a voice if you\'re gonna be silent in those moments you shouldn\'t be?', source: 'Angie Thomas', citation: 'The Hate U Give', year: 2017, tags: 'inspirational'}
];
 // Above is an array that contains 6 object literals. Each object has a quote, source, citation, and year property.
/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
// Here I used an arrow function for the "getRandomQuote" function (just thought it would make the code shorter)
      const randomNumber = Math.floor(Math.random() * quotes.length );   
// Above is a variable that calculates a random number between 0 and the amount of objects in the array (object.length).
      for ( let i = 0; i < quotes.length; i++) {
      let randomQuote = quotes[randomNumber];
      return randomQuote;
    }   
    // Above is a for loop that allows the randomQuote variable to pick an object at random using object notation and returns the object.
   };


const randomColor = () => {  
//Here I used an arrow function for the "randomColor" function.
let newColor = '';
// Set a variable to an empty string to be updated as the code runs.
let red = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
// Here a random number is calculated for each variable.
 newColor = `rgb(${red}, ${blue}, ${green})`;
// the values calculated for the variables above are passed to the 'rgb(') function.
  document.body.style.backgroundColor = newColor;
// the final color value (hexidecimal color value) is set to the background color.
};

randomColor();
// the function is called immediately


/***
 * `printQuote` function
***/

const printQuote = () => {
/// Here I used an arrow function for the "printQuote" function like before.
  let callRandomQuote = getRandomQuote();
// Above is the variable used to call getRandomQuote() inside the printQuote() function.
  let html = "";
// here I set a variable (html) equal to an empty string that will updated as the code runs.
   html +=  `<p class="quote">` + callRandomQuote.quote + `</p>`;
    html += `<p class="source">` + callRandomQuote.source;
//Above is where the quote and source properties of the objects in the array are updated to the "html" variable.
    if ( callRandomQuote.citation ) {
   html += `<span class="citation">` + callRandomQuote.citation + `</span>`;
  } 

   if ( callRandomQuote.year ) {
    html += `<span class="year">` + callRandomQuote.year + `</span>`;
  } 
  if ( callRandomQuote.tags ) {
    html += +' '+ `<span class="tags">` + callRandomQuote.tags + `</span>`;
  } 
/* Above here are 2 "if" statements that test whether the "citation" and "year" properties are present. 
  If they are present the string I've added are concatenated unto the "html" variable.
  I just left the array.property within the condition of the if statement because that will auto-allow the statement to
  evaulate to true if it is in fact true*/
   html += `</p>`;
  // Above is the concatenated </p> closing paragraph tag.
   document.getElementById('quote-box').innerHTML = html;
  //Above is the code that links the updated string "html" to the browser.
  };



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", randomColor, false);