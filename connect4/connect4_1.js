// const inquirer = require('inquirer');
const prompt = require('prompt-sync')();
// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   console.log(`Hi ${answers['name']}!`);
//   if (answers) {
//     inquirer.prompt(questions).then((answers) => {
//       console.log(`Hi ${answers['name']}!`);
//     });
//   }
// });

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
 
for (let i=0; i<5; i++) {
  // Get user input
  let guess = prompt('Guess a number from 1 to 10: ');
  // Convert the string input to a number
  guess = Number(guess);
 
  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    //foundCorrectNumber = true;
  } else {
    console.log('Sorry, guess again!');
  }
}