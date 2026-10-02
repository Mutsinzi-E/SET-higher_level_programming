#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(movieUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const movie = JSON.parse(body);
  const characters = movie.characters;
  let completed = 0;

  characters.forEach((characterUrl, index) => {
    request.get(characterUrl, (characterError, characterResponse, characterBody) => {
      if (characterError) {
        console.log(characterError);
        return;
      }

      const character = JSON.parse(characterBody);
      characters[index] = character.name;
      completed += 1;

      if (completed === characters.length) {
        characters.forEach((name) => {
          console.log(name);
        });
      }
    });
  });
});
