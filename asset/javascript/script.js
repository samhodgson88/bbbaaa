'use strict';
/*
console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = 'correct number wooooo';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

 let SecretNumber = Math.trunc(Math.random() *20) +1;
 let score = 20;
 let highscore = 0;



document.querySelector('.check').addEventListener
('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
//* when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
    //* when player wins
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'correct number wooooo';
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.
    backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if (score > highscore)
    highscore = score;
    document.querySelector('.highscore').
    textContent = highscore;

  } else if (guess !== SecretNumber) {
    if (score > 1) {
    document.querySelector('.message').textContent = 
    guess > SecretNumber ? 'too high' : 'too low'; 
    score--;
   document.querySelector('.score').textContent = 
   score;
  } else {
    document.querySelector('.message').textContent = 'you lost the game';
    document.querySelector('.score').textContent =
    0;
  } 
 }
}); 
  //* again button
  document.querySelector('.again').addEventListener
  ('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() *20) +1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});



// } else if (guess < SecretNumber) {
 // if (score > 1) {
  //  document.querySelector('.message').textContent =   
  //  score--;
 //   document.querySelector('.score').textContent = 
 //   score;
 // } else {
 //   document.querySelector('.message').textContent = 'you lost the game';
 //   document.querySelector('.score').textContent =
//    0;
//   }
















  






