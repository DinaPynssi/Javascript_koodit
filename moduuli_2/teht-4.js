// Write a program that asks the user for numbers until the user gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

const numbers = [];

while (true) {
  const number = Number(prompt('Enter a number (0 to stop)'));

  if (number === 0) {
    break;
  }

  numbers.push(number);
}

numbers.sort(function(a, b) {
  return b - a;
});

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}