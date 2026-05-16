// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page
// in an ordered list (<ol>) in alphabetical order. (2p)

const participants = Number(prompt('How many people'));

const names = [];

for (let i = 0; i < participants; i++) {
  const name = prompt('Enter name');
  names.push(name);
}

names.sort();

document.body.innerHTML = '<ol></ol>';

const list = document.querySelector('ol');

for (let i = 0; i < names.length; i++) {
  list.innerHTML += `<li>${names[i]}</li>`;
}