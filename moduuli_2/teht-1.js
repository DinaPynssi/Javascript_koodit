//Write a program that prompts the user for five numbers and prints them in the reverse order they were entered (not reverse sorted). Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

const numbers = [];

for (let i = 0; i < 5; i++) {
    const number = Number(prompt('enter a number'));
    numbers.push(number);
}

for (let i = numbers.length -1; i >= 0; i--) {
    console.log(numbers[i]);
}