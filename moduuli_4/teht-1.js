// Make an app that retrieves information about
// a TV series you enter and displays it in the console. (2p)

'use strict';

const form = document.querySelector('#searchForm');
const query = document.querySelector('#query');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`);
  const data = await response.json();

  console.log(data);
});