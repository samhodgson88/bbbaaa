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

const secretnumber = Math.trunc(Math.random() * 20) +1;
document.querySelector('.number').textContent = secretnumber;
let score = 20;

//* event listener *//

document.querySelector('.check').addEventListener
('click', function(){
  const guess =  Number(document.querySelector('.guess').value);
  console.log (guess, typeof guess)

     if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';
}   else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'correct number wooooo';
   }else if (guess > secretnumber) {
    if (score > 0) {   
    document.querySelector('.message').textContent = 'Too High'; 
    score--;
    document.querySelector('.score').textContent = 
    score;
     } else {
     document.querySelector('.message').textContent = 'You lose';
     }
   }else if (guess < secretnumber) {
    document.querySelector('.message').textContent = 'Too low'; 
    score--;
    document.querySelector('.score').textContent = score;    
}
});







