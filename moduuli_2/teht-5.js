// Write a program that prompts the user for numbers. When the user enters one of the numbers previously entered,
// the program will announce that the number has already been given
// and stops its operation and then prints all the given numbers
// to the console in ascending order. (2p)

const numbers = [];

while (true) {
  const number = Number(prompt('write a number'));

  if (numbers.includes(number)) {
    alert('number has been given');
    break;
  }

  numbers.push(number);
}

numbers.sort(function(a, b) {
  return a - b;
});

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}