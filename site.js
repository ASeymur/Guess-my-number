'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score2 = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You Win!';
        document.querySelector('body').style.animation = 'pulsate .7s infinite';  ;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.fontSize = '9rem';
        document.querySelector('.guess').disabled = true;
        if (score2 > highscore) {
            highscore = score2
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > secretNumber) {
        if (score2 > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score2 -= 1;
            document.querySelector('.score').textContent = score2;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0
        }
    } else if (guess < secretNumber) {
        if (score2 > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score2 -= 1;
            document.querySelector('.score').textContent = score2;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score2 = 20
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#d9d8d4';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').style.height = '20rem';
    document.querySelector('.number').style.fontSize = '6rem';
    document.querySelector('.score').textContent = score2;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.animation = 'none';
    document.querySelector('.guess').disabled = false;
})