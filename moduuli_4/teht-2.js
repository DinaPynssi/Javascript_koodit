// Develop the app further.
// Add JavaScript that gets the value entered to the form
// and sends a request with fetch to
// https://api.tvmaze.com/search/shows?q=${value_from_input}.
// Print the search result to the console. (3p)

'use strict';

const form = document.querySelector('#searchForm');
const query = document.querySelector('#query');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});