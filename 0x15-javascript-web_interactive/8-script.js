#!/usr/bin/node

const movieList = document.querySelector('#list_movies');

async function fetchMovies() {
  try {
    const response = await fetch(
      'https://swapi-api.alx-tools.com/api/films/?format=json'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movies.');
    }

    const data = await response.json();

    data.results.forEach((movie) => {
      const listItem = document.createElement('li');
      listItem.textContent = movie.title;
      movieList.appendChild(listItem);
    });
  } catch (error) {
    const errorItem = document.createElement('li');
    errorItem.textContent = 'Unable to load movies.';
    movieList.appendChild(errorItem);
  }
}

fetchMovies();
