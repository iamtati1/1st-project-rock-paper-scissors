// menu.js
const prompt = require('prompt-sync')({ sigint: true });
const { playRound, viewStats, resetStats, bestOfMode } = require('./game.js');

const showMenu = () => {
    let isRunning = true;

    while (isRunning) {
        console.log("\n🎮 Menu:");
        console.log("1. Play Round");
        console.log("2. View Stats");
        console.log("3. Reset Stats");
        console.log("4. Exit");
        console.log("5. Play Best of X Rounds\n");

        const menuChoice = prompt("Choose an option (1-5): ").trim();

        if (menuChoice === "1") {
            playRound();
        } else if (menuChoice === "2") {
            viewStats();
        } else if (menuChoice === "3") {
            resetStats();
        } else if (menuChoice === "4") {
            console.log("👋 Thanks for playing!");
            isRunning = false;
        } else if (menuChoice === "5") {
            bestOfMode();
        } else {
            console.log("❌ Invalid choice, try again.");
        }
    } if (isRunning) {
        prompt("\nPress Enter to continue...");
        console.clear();
    }
};

module.exports = { showMenu };
