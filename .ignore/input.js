const { read } = require("fs");
const readline = require("readline");

/**
 * @param {string} message à récupérer
 * @returns {Promise<string>} le message saisi
 */

async function CLIinput(promptMsg = "") {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(promptMsg, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
async function input(n) {
  n = await CLIinput(n);
  console.log(n);
 
}
let nom = input("nom");
console.log(nom);
