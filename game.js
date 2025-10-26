// game.js
const prompt = require('prompt-sync')({ sigint: true });

const gameData = {
    wins: 0,
    losses: 0,
    ties: 0
};

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const playRound = () => {
    const userChoice = prompt("Choose a move (rock, paper, or scissors): ").trim().toLowerCase();
    if (!choices.includes(userChoice)) {
        console.log("❌ Invalid choice. Please type rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();

    console.log(`\nYou chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        gameData.ties++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`${userChoice} beats ${computerChoice}! You win!`);
        gameData.wins++;
    } else {
        console.log(`${computerChoice} beats ${userChoice}! You lose!`);
        gameData.losses++;
    }
};

const bestOfMode = () => {
    const roundsToWin = parseInt(prompt("Play best of how many rounds? (e.g. 3 or 5): "));
    let userWins = 0;
    let computerWins = 0;

    while (userWins < Math.ceil(roundsToWin / 2) && computerWins < Math.ceil(roundsToWin / 2)) {
        const userChoice = prompt("Choose rock, paper, or scissors: ").trim().toLowerCase();
        const computerChoice = getComputerChoice();

        if (userChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`${userChoice} beats ${computerChoice}! You win this round!`);
            userWins++;
        } else {
            console.log(`${computerChoice} beats ${userChoice}! Computer wins this round!`);
            computerWins++;
        }

        console.log(`Score: You ${userWins} - ${computerWins} Computer\n`);
    }

    if (userWins > computerWins) {
        console.log("🎉 You won the best of series!");
    } else {
        console.log("😢 The computer won the best of series!");
    }
};

const viewStats = () => {
    const totalGames = gameData.wins + gameData.losses + gameData.ties;
    const winRate = totalGames > 0 ? Math.round((gameData.wins / totalGames) * 100) : 0;

    console.log("\n📊 Current Statistics:");
    console.log(`Games Won: ${gameData.wins}`);
    console.log(`Games Lost: ${gameData.losses}`);
    console.log(`Games Tied: ${gameData.ties}`);
    console.log(`Total Games: ${totalGames}`);
    console.log(`Win Rate: ${winRate}%`);
};
const resetStats = () => {
    gameData.wins = 0;
    gameData.losses = 0;
    gameData.ties = 0;
    console.log("🔄 Game statistics have been reset!");
};

module.exports = { playRound, viewStats, bestOfMode, resetStats };