HTML code:
<!DOCTYPE html>
   <head>
     <title>Rock Paper Scissors</title>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="stylesheet" type="text/css" href="style.css" />
   </head>
   <body>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Rock Paper Scissors Game</title>
     <link rel="stylesheet" href="Game.css">
 </head>
 <body>
     <h1>Rock Paper Scissors Game</h1>
     <p>Choose your move:</p>
     <div class="buttons">
       <button id="rock">&#x1F44A;</button>
       <button id="paper">&#x1F590;</button>
       <button id="scissors">&#x270C;</button>
     </div>
     <p id="result"></p>
     <p id="scores">
         Your score: <span id="user-score">0</span>
         Computer score: <span id="computer-score">0</span>
     </p>
 
     <script src="Game.js"></script>
   </body>
 </html>
 </body>
 </html>

JavaScript code:
const buttons = document.querySelectorAll("button");
 
 const resultEl = document.getElementById("result");
 
 const playerScoreEl = document.getElementById("user-score");
 
 const computerScoreEl = document.getElementById("computer-score");
 
 let playerScore = 0;
 let computerScore = 0;
 
 buttons.forEach((button) => {
   button.addEventListener("click", () => {
     playRound(button.id, computerPlay());
     const result = playRound(button.id, computerPlay());
     resultEl.textContent = result;
     
   });
 });
 
 function computerPlay() {
   const choices = ["rock", "paper", "scissors"];
   return choices[Math.floor(Math.random() * choices.length)];
   const randomChoice = Math.floor(Math.random() * choices.length);
   return choices[randomChoice];
 }
 
 function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
     document.getElementById("result").textContent = "Tie game!";
     return "It's a tie!";
   } else if (
     (playerSelection === "rock" && computerSelection === "scissors") ||
     (playerSelection === "paper" && computerSelection === "rock") ||
     (playerSelection === "scissors" && computerSelection === "paper")
   ) {
     playerScore++;
     document.getElementById(
       "result"
     ).textContent = `You win! ${playerSelection} beats ${computerSelection}`;
     playerScoreEl.textContent = playerScore;
     return "You win! " + playerSelection + " beats " + computerSelection;
   } else {
     computerScore++;
     document.getElementById(
       "result"
     ).textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
     computerScoreEl.textContent = computerScore;
     return "You lose! " + computerSelection + " beats " + playerSelection;
   }
   updateScore();
 }
 
 function updateScore() {
   document.getElementById(
     "player-score"
   ).textContent = `Your score: ${playerScore}`;
   document.getElementById(
     "computer-score"
   ).textContent = `Computer's score: ${computerScore}`;
 }

 CSS code:
 * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
    font-family: Arial, sans-serif;
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  
  .buttons 
  
  button {
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 3rem;
    margin: 0 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
  
  #rock {
    background-color: #f44336; 
    background-color: #ff0000;
  }
  
  #paper {
    background-color: #2196f3; 
    background-color: #2196f3;
  }
  
  #scissors {
    background-color: #4caf50; 
  }
  
  #result {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  
  #scores {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    background-color: #4caf50;
  }
  
  #player-score {
    color: #4caf50;
    margin-right: 0.5rem;
  #user-score {
    color: #2196f3;
  }
  
  #computer-score {
    color: #f44336;
    color: #ff0000;
  }}
