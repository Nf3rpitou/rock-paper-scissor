
let playerScore = 0;
let computerScore = 0;


function play(playerChoice) {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    const resultText = document.getElementById("result");
    resultText.innerText =
        `Gon: ${playerChoice} | Neferpitou: ${computerChoice} → ${result}`;

    if (result === "You win!") {
        resultText.style.color = "lightgreen";
    } else if (result === "You lose!") {
        resultText.style.color = "red";
    } else {
        resultText.style.color = "white";
    }

    document.getElementById("score").innerText =
        `Gon: ${playerScore} | Neferpitou: ${computerScore}`
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("score").innerText =
        "Gon: 0 | Neferpitou: 0";

    document.getElementById("result").innerText =
        "Choose your move";

    document.getElementById("result").style.color = "white";
}