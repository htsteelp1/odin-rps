let hScore;
let cScore;
function numToRPS(choice) {
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    //     Since im submitting this and this course has not taught arrays for JavaScript, I used a switch statemnt
    }
}
function getHumanChoice() {
    switch(prompt("Rock, Paper, or Scissors").toLowerCase()) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}
function getComputerChoice() {
    return Math.trunc(Math.random()*9)%3; // Gets a random number between 0-2
}
function playRound() {
    let cChoice = getComputerChoice();
    let hChoice = getHumanChoice();
    if (cChoice === hChoice) {
    }
    else if ((cChoice+2-hChoice)%3) { // Math Expression I made for Rock Paper Scisors Winner
        hScore++;
    }
    else {
        cScore++;
    }
    console.log("Your Choice: "+numToRPS(hChoice));
    console.log("Computer Choice: "+numToRPS(cChoice));
}
function playGame() {
    hScore = 0;
    cScore = 0;
    console.log(`Welcome to Rock Paper Scissors`);
    for (let i = 0; i<5; i++) {
        playRound();
        console.log("Score (H-C): " + hScore + "-" + cScore);
    }
    console.log("Winner: " + "Human".repeat(hScore>cScore) + "Computer".repeat(hScore<cScore) + "Tie".repeat(hScore===cScore));
}
playGame()


