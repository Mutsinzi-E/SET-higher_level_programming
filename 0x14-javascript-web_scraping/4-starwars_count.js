#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const wedgeUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  films.forEach((film) => {
    if (film.characters.includes(wedgeUrl)) {
      count += 1;
    }
  });

  console.log(count);
});
