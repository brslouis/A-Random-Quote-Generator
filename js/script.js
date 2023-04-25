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
  { quote:'a', source: 'a', citation: 'a', year: 1},
  { quote:'b', source: 'b', citation: 'b', year: 2},
  { quote:'c', source: 'c', citation: 'c', year: 3},
  { quote:'d', source: 'd', citation: 'd', year: 4},
  { quote:'e', source: 'e', citation: 'e', year: 5},
  { quote:'f', source: 'f', citation: 'f', year: 6}
];
 
/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * quotes.length );
    return randomNumber;
};

let randomQuoteObject = getRandomQuote(quotes);

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);