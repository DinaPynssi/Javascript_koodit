// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
//
// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.

const rolls = Number(prompt('how many dice rolls'));

let sum = 0;
for (let i = 0; i < rolls; i++) {
    const dice = Math.floor(Math.random()*6)+1;
    sum += dice;
}

document.body.innerHTML = `<p>Sum of dice rolls: ${sum}</p>`