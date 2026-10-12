#!/usr/bin/node

document.addEventListener('DOMContentLoaded', () => {
  const languageInput = document.querySelector('#language_code');
  const translateButton = document.querySelector('#btn_translate');
  const helloElement = document.querySelector('#hello');

  translateButton.addEventListener('click', async () => {
    const languageCode = languageInput.value.trim();

    try {
      const response = await fetch(
        `https://hellosalut.stefanbohacek.dev/?lang=${encodeURIComponent(languageCode)}`
      );

      if (!response.ok) {
        throw new Error('Translation request failed.');
      }

      const data = await response.json();
      helloElement.textContent = data.hello;
    } catch (error) {
      helloElement.textContent = 'Unable to load translation.';
    }
  });
});
