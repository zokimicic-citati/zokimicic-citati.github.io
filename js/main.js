const quotes = [
  'Ako ti se prdi idi u wc pa se izduvaj',
  'Sve ti je to pričam ti priču',
  'Gde ste mačkići',
  'Sve to ide po inerciji',
  'Vaš posao je deco sedeći',
  'Buongiorno, come stai signore. Bene, molto bene'
];

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    const quoteElement = document.querySelector('#quote');
    const randomNumber = Math.floor(Math.random() * quotes.length);
    quoteElement.innerHTML = quotes[randomNumber];
  }
}
