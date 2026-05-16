// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

const dogs = [];

for (let i = 0; i < 6; i++) {
  const dog = prompt('write dog name');
  dogs.push(dog);
}

dogs.sort();
dogs.reverse();

document.body.innerHTML = '<ul></ul>';

const list = document.querySelector('ul');

for (let i = 0; i < dogs.length; i++) {
  list.innerHTML += `<li>${dogs[i]}</li>`;
}