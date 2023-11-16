// Iteration 5: Store the player score and display it on the game over screen

let score = localStorage.getItem('score') ;
console.log(score);

var scoreboard = document.getElementById('score-board');

var playagain = document.getElementById('play-again-button');

scoreboard.innerText=score;

playagain.onclick = () => {
    location.href = "./game.html";
  };
