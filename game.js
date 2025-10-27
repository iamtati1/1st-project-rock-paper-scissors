// game.js Handles gameplay logic and data tracking.

const prompt = require('prompt-sync')({ sigint: true });
const player = require('play-sound')();
const gameData = {
    wins: 0,
    losses: 0,
    ties: 0
};

const choices = ["rock", "paper", "scissors"];
const handGestures = {
    rock: `
        _______
    ---'   ____)
          (_____)
          (_____)
          (____)
    ---.__(___)
    `,
    paper: `
         _______
    ---'    ____)____
               ______)
              _______)
             _______)
    ---.__________)
    `,
    scissors: `
        _______
    ---'   ____)____
              ______)
           __________)
          (____)
    ---.__(___)
    `
};

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const playRound = () => {
    const userChoice = prompt("Choose: (rock, paper, or scissors): ").trim().toLowerCase();
    if (!choices.includes(userChoice)) {
        console.log("❌ Invalid choice. Please type rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();

    console.log(`\nYou chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    console.log("\nYou chose:");
    console.log(handGestures[userChoice]);

    console.log("Computer chose:");
    console.log(handGestures[computerChoice]);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        gameData.ties++;
        player.play('./sounds/tie.mp3');
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`${userChoice} beats ${computerChoice}! You win!`);
        gameData.wins++;
        player.play('./sounds/win.mp3');
    } else {
        console.log(`${computerChoice} beats ${userChoice}! You lose!`);
        gameData.losses++;
        player.play('./sounds/lose.mp3');
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

    const stats = [
        { label: "Games Won", value: gameData.wins },
        { label: "Games Lost", value: gameData.losses },
        { label: "Games Tied", value: gameData.ties },
        { label: "Total Games", value: totalGames },
        { label: "Win Rate", value: `${winRate}%` }
    ];

    console.log("\n📊 Current Statistics:"); // \n is like enter
    stats.forEach(stat => console.log(`${stat.label}: ${stat.value}`));
};

const resetStats = () => {
    gameData.wins = 0;
    gameData.losses = 0;
    gameData.ties = 0;
    console.log("🔄 Game statistics have been reset!");
};

module.exports = { playRound, viewStats, bestOfMode, resetStats };