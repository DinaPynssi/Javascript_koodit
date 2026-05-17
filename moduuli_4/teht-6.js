// Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
// Print each joke in this format:
// <article>
//     <p>Joke here<p>
// </article>

'use strict';

const form = document.querySelector('#searchForm');
const query = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`);
  const data = await response.json();

  results.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const show = data[i].show;

    results.innerHTML += `
      <article>
        <h2>${show.name}</h2>
        <img src="${show.image ? show.image.medium : ''}" alt="${show.name}">
        <p>${show.summary || ''}</p>
      </article>
    `;
  }
});