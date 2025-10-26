const { showMenu } = require('./menu.js');

// This is the main entry point for the application.
const startApp = () => {
    console.clear();
    console.log("Hello Gamer! 🎮 Welcome to Rock Paper Scissors!\n");
    showMenu();
};

startApp();