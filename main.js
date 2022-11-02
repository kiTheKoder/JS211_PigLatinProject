'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  // Your code here
  
  //GOAL : take word and translate it to "pig latin"
  //PIG LATIN RULES:
  // if the word starts with a consonant take the first letter of a word and place it in the back of the original word nd add yay
  //if the word starts with a vowel, we attach "yay" at the end

  /*I NORMALLY WOULD NOT LEAVE WASTE NOTES IN MY DOCUMENT, BUT I WANT YOU TO SEE MY THINKING */

  // converts to lowercase and trims
word= word.toLowerCase().trim()

if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u")
  {

    word = word + "yay"
    return word
  }

let firstTwoConsonants = "  "

if (word[0,1] !== "a" && word[0,1] !== "e" && word[0,1] !== "i" && word[0,1] !== "o" && word[0,1] !== "u")
{
  
firstTwoConsonants = word[0]
firstTwoConsonants+= word[1]

word = word.substr(2) + firstTwoConsonants + "ay"

return word
}



/*let wordArray = word.split("")
 delete wordArray[0];
 delete wordArray[1];

word = wordArray.join()

word = word.replace(',', "")
 
word = word + firstTwoConsonants + "ay"
return word*/


let firstConsonant = ""

if (word[0] !== "a" && word[0] !== "e" && word[0] !== "i" && word[0] !== "o" && word[0] !== "u")
  {
  firstConsonant += word[0]

  word = word.slice(1)
  word = word + firstConsonant + "ay"

  return word 

  }



}



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
