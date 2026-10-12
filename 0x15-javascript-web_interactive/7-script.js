#!/usr/bin/node

const characterElement = document.querySelector('#character');

async function fetchCharacter() {
  try {
    const response = await fetch(
      'https://swapi-api.alx-tools.com/api/people/5/?format=json'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch character.');
    }

    const data = await response.json();
    characterElement.textContent = data.name;
  } catch (error) {
    characterElement.textContent = 'Unable to load character.';
  }
}

fetchCharacter();
