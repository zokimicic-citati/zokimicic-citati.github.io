const quotes = [
  'Ako ti se prdi idi u wc pa se izduvaj',
  'Sve ti je to pričam ti priču',
  'Gde ste mačkići'
  'Lepo vreme'
  'Sve je to po inerciji'
  'Vaš posao je deco sedeći'
];

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    const quoteElement = document.querySelector('#quote');
    const randomNumber = Math.floor(Math.random() * quotes.length);
    quoteElement.innerHTML = quotes[randomNumber];
  }
}
