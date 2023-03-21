let difficulty;
let difficultyNumber;
let difficulty1;
let actualNumber1;
let actualNumber2;
let actualNumber3;
let actualNumber4;
let finalActualNumber;
let guess = `no guesses yet`;
let guessCheck;
let variable;
let check1 = `❌`;
let check2 = `❌`;
let check3 = `❌`;
let check4 = `❌`;
let option = check1 + check2 + check3 + check4;
let counter = 0;
let guessCounter = 10;
let wrong;
let finalActualNumberCheck = ``;
//Reset everything so that the program will be reset.
check1 = `❌`;
check2 = `❌`;
check3 = `❌`;
check4 = `❌`;
counter = 0;
difficulty1 = `notdone`;
difficulty = prompt(`Enter a difficulty level. Type "hard" for the hardest mode. With this, you will have to guess between the numbers 0-9. Type "easy" for the easiest level. You will then be guessing between the numbers of 0-5. If you want moderate, type "moderate". This will allow you to guess between the numbers 0-7.`);

//This is a function to write directly to the inner html page by taking in two parameters. One for the element id and another for the message.
function shortcutMessage(elementId, message) {
  variable = document.getElementById(elementId);
  variable.innerHTML = message;
}
//This a function that will replace a character at a specific index of a string. It uses substring() to isolate a part of a string and adds the new replace character to it. Though this code is not mine. The link to it is https://gist.github.com/efenacigiray/9367920.
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
//Loop to make sure that the difficulty entered is valid.
while (difficulty1 != `done`) {
  if (difficulty == `hard`) {
    difficulty1 = `done`;
    difficultyNumber = 9;
  }
  else if (difficulty == `easy`) {
    difficulty1 = `done`;
    difficultyNumber = 5;
  }
  else if (difficulty == `moderate`) {
    difficulty1 = `done`;
    difficultyNumber = 7;
  }
  else {
    difficulty = prompt(`Enter a correct difficulty!`);
  }
}

//Generates random numbers and adds them to make a four digit string.
actualNumber1 = (Math.floor((Math.random() * difficultyNumber) + 0)).toString();
actualNumber2 = (Math.floor((Math.random() * difficultyNumber) + 0)).toString();
actualNumber3 = (Math.floor((Math.random() * difficultyNumber) + 0)).toString();
actualNumber4 = (Math.floor((Math.random() * difficultyNumber) + 0)).toString();
finalActualNumber = (actualNumber1 + actualNumber2 + actualNumber3 + actualNumber4);
finalActualNumberCheck = finalActualNumber.toString();

//See what numbers happen to be in the correct spot!
function begin() {
  guessCheck = document.getElementById("guess").value;
  guess = guessCheck.toString();
  finalActualNumberCheck = finalActualNumber;
  counter += 1;
  guessCounter -= 1;

  if (counter > 9) {
    document.write(`You lose!!! Get better at guessing! The actual number was ${finalActualNumber}. Refresh the page to try again!`);
  }
  //This is needed in between so that the program doesn't malfunction and say that there is a guess correct where there is not. Though I agree, it's very ugly.
  if (finalActualNumber[3] == guess[3]) {
    check1 = `⚫`;

    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `/`);
  }
  if (finalActualNumber[1] == guess[1]) {
    check2 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `,`);
  }
  if (finalActualNumber[2] == guess[2]) {
    check3 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `}`);
  }
  if (finalActualNumber[0] == guess[0]) {
    check4 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `;`);
  }

  else if (guess[0] == finalActualNumberCheck[1]) {
    check1 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `~`);
  }
  else if (guess[0] == finalActualNumberCheck[2]) {
    check1 = '⚪';
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `"`);
  }
  else if (guess[0] == finalActualNumberCheck[3]) {
    check1 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `+`);
  }

  else {
    check1 = `❌`;
  }

  if (finalActualNumber[0] == guess[0]) {
    check1 = `⚫`;

    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `/`);
  }
  if (finalActualNumber[3] == guess[3]) {
    check2 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `,`);
  }
  if (finalActualNumber[2] == guess[2]) {
    check3 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `}`);
  }
  if (finalActualNumber[1] == guess[1]) {
    check4 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `;`);
  }

  else if (guess[1] == finalActualNumberCheck[0]) {
    check2 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `=`);
  }
  else if (guess[1] == finalActualNumberCheck[2]) {
    check2 = '⚪';
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `_`);
  }
  else if (guess[1] == finalActualNumberCheck[3]) {
    check2 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `.`);
  }
  else {
    check2 = `❌`;
  }

  if (finalActualNumber[0] == guess[0]) {
    check1 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `/`);
  }
  if (finalActualNumber[1] == guess[1]) {
    check2 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `,`);
  }
  if (finalActualNumber[3] == guess[3]) {
    check3 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `}`);
  }
  if (finalActualNumber[2] == guess[2]) {
    check4 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `;`);
  }

  else if (guess[2] == finalActualNumberCheck[0]) {
    check3 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `{`);
  }
  else if (guess[2] == finalActualNumberCheck[1]) {
    check3 = '⚪';
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `]`);
  }
  else if (guess[2] == finalActualNumberCheck[3]) {
    check3 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `[`);
  }
  else {
    check3 = `❌`;
  }

  if (finalActualNumber[0] == guess[0]) {
    check1 = `⚫`;

    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `/`);
  }
  if (finalActualNumber[1] == guess[1]) {
    check2 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `,`);
  }
  if (finalActualNumber[2] == guess[2]) {
    check3 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `}`);
  }
  if (finalActualNumber[3] == guess[3]) {
    check4 = `⚫`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 3, `;`);
  }

  else if (guess[3] == finalActualNumberCheck[0]) {
    check4 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 0, `:`);
  }
  else if (guess[3] == finalActualNumberCheck[1]) {
    check4 = '⚪';
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 1, `?`);
  }
  else if (guess[3] == finalActualNumberCheck[2]) {
    check4 = `⚪`;
    finalActualNumberCheck = replaceAt(finalActualNumberCheck, 2, `!`);
  }
  else {
    check4 = `❌`;
  }
  
  guessCheck = (check1 + check2 + check3 + check4);

  if (guess.length == 4) {
    shortcutMessage(`history`, `<p>Hints:${guessCheck}</p>`);
  }

  else {
    shortcutMessage(`history`, `<p>Come on! Why would you waste a guess like that? Input must be 4 numbers long! </p>`);
  }
  shortcutMessage(`previous`, `<p3>Previous Guess: ${guess}</p3>`);

  shortcutMessage(`intro`, `<p1>You are guessing between the numbers 0-${difficultyNumber}</p1> `);

  shortcutMessage(`number`, `<p>Guesses left: ${guessCounter}</p> `);

  if (finalActualNumber == guess) {
    document.write(`<p>HOORAY, YOU GUESSED THE CORRECT NUMBER!!!! THE CORRECT NUMBER WAS ${finalActualNumber}. Reload the page to start another round.</p>`);
  }
  console.log(guess, guessCheck);
}




