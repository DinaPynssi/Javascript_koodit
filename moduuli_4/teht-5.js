// Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)

'use strict';

const form = document.querySelector('#searchForm');
const query = document.querySelector('#query');
const result = document.querySelector('#result');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query.value}`);
  const data = await response.json();

  if (data.result.length > 0) {
    result.innerHTML = data.result[0].value;
  } else {
    result.innerHTML = 'No jokes found';
  }
});