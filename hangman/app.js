const puzzleEL = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const guessedEl = document.querySelector('#guessed');
const game1 = new Hangman('Cat', 2);

puzzleEL.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;


window.addEventListener('keypress', (e) => {
   const guess = String.fromCharCode(e.charCode);
   game1.makeGuess(guess);
   guessedEl.textContent = guess;
   puzzleEL.textContent = game1.puzzle;
   guessesEl.textContent = game1.statusMessage;
  
});

getPuzzle("2", (error, puzzle) => {
   if (error) {
      console.log(`Error: ${error}`);
   } else {
      console.log(puzzle);
   }
})

getCountry("MX", (error, country) => {
   if(error) {
      console.log(error);
   } else {
      console.log(`Country name: ${country.name}`);
   }
});




/* Primitive value: string, number, boolean, null, undefined
Object tree     myObject --> Object.prototype ---> null 
Array:          myArray -->  Array.prototype  -->  Object.prototype ---> null  
Function:       myFunc --> Function.prototype --> Object.prototype ---> null       
String:         myString --> String.prototype --> Object.prototype --> null     
Number:         myNumber --> Number.prototype --> Object.prototype --> null
Boolean:        myBool -->  Boolean.prototype --> Object.prototype --> null
*/