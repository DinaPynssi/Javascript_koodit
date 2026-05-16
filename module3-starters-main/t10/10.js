'use strict';

const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = form.firstname.value;
  const lastName = form.lastname.value;

  target.innerHTML = `Your name is ${firstName} ${lastName}`;
});