'use strict';

let player0Section = document.querySelector('.player--0');
let player1Section = document.querySelector('.player--1');
let scorePlayer0 = document.getElementById('score--0');
let scorePlayer1 = document.getElementById('score--1');
let currentScoreP0 = document.getElementById('current--0');
let currentScoreP1 = document.getElementById('current--1');
let dice = document.querySelector('.dice');

let btnRollDice = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;


const init = function(){
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  dice.classList.add('hidden');
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  playing = true;
  document.querySelector(`.player--0`).classList.remove(`player--winner`);
  document.querySelector(`.player--1`).classList.remove(`player--winner`);
  player0Section.classList.add(`player--active`);
  player1Section.classList.remove(`player--active`);
  currentScoreP0.textContent = 0;
  currentScoreP1.textContent = 0;
}
init();

btnRollDice.addEventListener('click', function() {
  if (playing) {
    let diceRollNumber = Math.trunc(Math.random() * 6 + 1);

    dice.src = `dice-${diceRollNumber}.png`
    dice.classList.remove('hidden');

    if (diceRollNumber !== 1) {
      currentScore += diceRollNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0Section.classList.toggle(`player--active`);
      player1Section.classList.toggle(`player--active`);
    }
  }
});

btnHold.addEventListener('click', function() {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
      document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0Section.classList.toggle(`player--active`);
      player1Section.classList.toggle(`player--active`);
    }
  }
})

newGame.addEventListener('click', init);







//
