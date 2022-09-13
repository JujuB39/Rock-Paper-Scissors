// define array for choices [r, p, s]
var choices = ["R", "P", "S"];

// define var for computerChoice 
var computerChoice;

// define var for win, losses, ties
var wins = 0;
var losses = 0;
var ties = 0;

// define play again
var playAgain = true;

while(playAgain) {

// define var for playerChoice
var playerChoice = prompt("Chose R, P, or S");

// randomly choose computerChoice
var computerChoice = choices[Math.floor(Math.random() * choices.length)]

if (computerChoice === choices[0]) {
    alert("Computer chose R");
} else if (computerChoice === choices[1]) {
    alert("Computer chose P")
} else if (computerChoice === choices[2]) {
    alert("Computer chose S")
}


if (playerChoice === computerChoice) {
    ties++;
    alert("It's a tie!");
}
else if(((playerChoice === "R") && (computerChoice === "S")) 
    || ((playerChoice === "P") && (computerChoice === "R")) 
    || ((playerChoice ==="S") && (computerChoice === "P"))) {
    wins++;
    alert("You won!");
}
else {
    losses++;
    alert("You lost!");
}

alert("Wins: " + wins "\n" + "Losses: " + losses + "\n" + "Ties: " + ties )

//stats (number of win, losses, or ties)
playAgain = confirm("Play again?");

}