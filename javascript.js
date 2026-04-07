let hScore = 0;
let cScore = 0;
let hChoice;
let cChoice;
let humanScoreValue = document.querySelector("#humanScore .scoreValue");
humanScoreValue.textContent = hScore.toString();
let computerScoreValue = document.querySelector("#computerScore .scoreValue");
computerScoreValue.textContent = cScore.toString();
let playButton = document.querySelector("#playRound");
let controls = document.querySelector("#controls");
controls.addEventListener("click", clickHandler);
let rockButton = document.createElement("button");
rockButton.classList.add("controlButton");
rockButton.textContent = "Rock";
let scissorsButton = document.createElement("button");
scissorsButton.classList.add("controlButton");
scissorsButton.textContent = "Scissors";
let paperButton = document.createElement("button");
paperButton.classList.add("controlButton");
paperButton.textContent = "Paper";

function addControls() {
    controls.appendChild(rockButton);
    controls.appendChild(paperButton);
    controls.appendChild(scissorsButton);
}
function removeControls() {
    let controlList = document.querySelectorAll("button");
    controlList.forEach((child) => {
        controls.removeChild(child);
    })
}

function clickHandler(event) {
    switch(event.target) {
        case playButton:
            playRound();
            break;
        case rockButton:
            hChoice = 0;
            performScore();
            break;
        case paperButton:
            hChoice = 1;
            performScore();
            break;
        case scissorsButton:
            hChoice = 2;
            performScore();
            break;
    }
}

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

function getComputerChoice() {
    return Math.trunc(Math.random()*9)%3; // Gets a random number between 0-2
}
function playRound() {
    playButton.remove();
    addControls();
    cChoice = getComputerChoice();

}
function performScore() {
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
    humanScoreValue.textContent = hScore.toString();
    computerScoreValue.textContent = cScore.toString();
    removeControls();
}



