const quotes = [
  'Ako ti se prdi idi u wc pa se izduvaj',
  'Sve ti je to pričam ti priču',
  'Gde ste mačkići',
  'Sve to ide po inerciji',
  'Vaš posao je deco sedeći',
  'Buongiorno, come stai signore. Bene, molto bene',
  'Pa ja vam pričam, a vi kako hoćete'
];

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    const bodyElement = document.querySelector('body');

    const refreshButton = document.querySelector('#refresh');
    refreshButton.addEventListener('click', _event => {
      setRandomQuote();
    });

    const switchButton = document.querySelector('#switcher');
    switchButton.addEventListener('click', _event => {
      const dataThemeAttribute = bodyElement.getAttribute('data-theme');
      if (dataThemeAttribute && dataThemeAttribute === 'dark') {
        bodyElement.removeAttribute('data-theme');
        refreshButton.classList.remove('btn-outline-light');
        refreshButton.classList.add('btn-outline-dark');
      } else {
        bodyElement.setAttribute('data-theme', 'dark');
        refreshButton.classList.remove('btn-outline-dark');
        refreshButton.classList.add('btn-outline-light');
      }
    });

    setRandomQuote();
  }
}

function setRandomQuote() {
  const quoteElement = document.querySelector('#quote');
  const randomNumber = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomNumber];
}
