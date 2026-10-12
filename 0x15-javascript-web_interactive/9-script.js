#!/usr/bin/node

document.addEventListener('DOMContentLoaded', () => {
  const helloElement = document.querySelector('#hello');

  async function fetchHello() {
    try {
      const response = await fetch(
        'https://hellosalut.stefanbohacek.dev/?lang=fr'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch greeting.');
      }

      const data = await response.json();
      helloElement.textContent = data.hello;
    } catch (error) {
      helloElement.textContent = 'Unable to load greeting.';
    }
  }

  fetchHello();
});
