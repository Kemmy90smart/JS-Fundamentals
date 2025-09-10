// yearOfBirth.js - simple version

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(userName) {
  rl.question("How old are you? ", function(userAge) {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - parseInt(userAge, 10);

    console.log(`Hello ${userName}, you were born in ${yearOfBirth}.`);
    rl.close();
  });
});
