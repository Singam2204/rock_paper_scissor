const choices = ["rock", "paper", "scissor"];
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const result = document.getElementById('result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let finalPlayerScore = 0;
let finalComputerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let finalResult = "";

    if (playerChoice == computerChoice) {
        return "IT'S A TIE..!"
    }
    else {
        switch (playerChoice) {
            case "rock":
                finalResult = (computerChoice == "scissor") ? "YOU WIN..!" : "YOU LOOSE..!";
                break;

            case "paper":
                finalResult = (computerChoice == "rock") ? "YOU WIN..!" : "YOU LOOSE..!";
                break;

            case "scissor":
                finalResult = (computerChoice == "paper") ? "YOU WIN..!" : "YOU LOOSE..!";
                break;
        }
    }
    player.textContent = `PLAYER: ${playerChoice}`;
    computer.textContent = `COMPUTER: ${computerChoice}`;
    result.textContent = finalResult;


    switch (finalResult) {
        case "YOU WIN..!":
            result.classList.add("greenText");
            finalPlayerScore++;
            playerScore.textContent = finalPlayerScore;
            break;

        case "YOU LOOSE..!":
            result.classList.add("redText");
            finalComputerScore++;
            computerScore.textContent = finalComputerScore;
            break;
    }
}
