////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove;
    if (move){
      playerMove = move;
    }
    else {
      playerMove = getInput();
    }
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove;
    if (move){
      computerMove = move;
    }
    else {
      computerMove = randomPlay();
    }
    console.log(computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("it's a tie");
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
        console.log("you win");
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
        console.log("computer wins");
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
        console.log("computer wins");
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
        console.log("you win");
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
        console.log("you win");
    }
    else {
        winner = "computer";
        console.log("computer wins");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

     while (playerWins < 5 && computerWins < 5) {
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var winner = getWinner(playerMove, computerMove);

     if (winner === "player") {
      playerWins += 1;
      }
     else if (winner === "computer") {
      computerWins += 1;
    }
    console.log("Score:" + playerWins + " to " + computerWins);
    }
    return [playerWins, computerWins];
}





}

