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