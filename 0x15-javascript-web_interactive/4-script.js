#!/usr/bin/node

document.querySelector('#toggle_header').addEventListener('click', () => {
  const header = document.querySelector('header');
  header.classList.toggle('green');
  header.classList.toggle('red');
});
