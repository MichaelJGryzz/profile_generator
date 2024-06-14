// "Boilerplate" code copied from https://github.com/nodejs/node/blob/main/doc/api/readline.md
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable 😊 ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that activity? ", (answer3) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, random late snack, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("What sport is your hands down absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {

              console.log(`\nThank you for your valuable feedback! ✅\n`);

              console.log("YOUR NEW PROFILE:");
              console.log();

              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});