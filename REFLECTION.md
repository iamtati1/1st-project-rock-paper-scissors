# Reflection


Making this game was definitely a challenge, but also a rewarding experience. The easiest part for me was creating the menu items since I had an example from class (our task manager project) that had a similar structure. I used that as a guide and built out the menu options I wanted for my ***Rock, Paper, Scissors*** game.


The more challenging part was figuring out when and how to use certain methods, like `.trim()`, `.toLowerCase()`, and `Math.floor()`, in my `game.js` file. I also struggled a bit with using **ternary operators** correctly, which are basically a shorter way of writing **if/else** statements. This part *really* forced me to pay close attention to detail and make sure my functions were written and called in the right order.


One of the hardest but most interesting parts was building out the `menu.js` file, where I created *user-interactive* options to control the game. I had to store the game data inside an **object**, which we just learned about in Unit 1. It took some time to make sure each button and menu choice worked the way it should. For example, when the user chose option 1, the game needed to immediately start a round against the computer.


This project really made me apply everything we’ve learned so far. `If/else statements`, `loops`, `arrays`, `objects`, `booleans`, `syntax`, and `variable declarations`. I had to make sure everything was called in the right order so the game could actually run smoothly.


I got a lot of help from my class assignments, especially the ***swe-casestudy-1-cli-task-manager project***. That assignment gave me a strong foundation to build from. I also relied on resources like *MDN*, *Google*, and even *Reddit*, where people share real examples and explanations. Between all that, plus a lot of trial and error, I was able to figure out what worked and what didn’t.


Getting into the nitty-gritty of this project really tested my patience and problem-solving skills, but it also helped me understand JavaScript on a deeper level. Overall, I’m proud of how far I’ve come and excited to keep improving this game.
One technical concept I understand more deeply now is `ternary operators`. I already knew they were another way to write `if/else` statements, but working with them in my game helped it really stick. 

- For example, take this line of code: `const winRate = totalGames > 0 ? Math.round((gameData.wins / totalGames) * 100) : 0;`

If I were to read it like a normal if/else statement, it basically means: If the total number of games is greater than 0, calculate the win rate as a percentage. Otherwise, if no games have been played, set the win rate to 0. 


- The condition `totalGames > 0` checks if any games have been played.

- The question mark “ `?` “ means “if true, do this,” 

- The colon “ `:` ” separates what happens if it’s true from what happens if it’s false. 

- The expression “`gameData.wins / totalGames * 100`“ turns the win ratio into a percentage.

-  “ `Math.round` “ makes sure it’s a clean whole number. This line of code is really important for the whole functionality of my game. It takes in the games and turns it into a win rate so that players can keep track of how they are performing in the game. 

Using a ternary operator here helped me understand how all the pieces come together and made me more confident using them instead of always relying on if/else statements.