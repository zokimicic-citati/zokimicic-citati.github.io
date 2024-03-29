const quotes = [
  'Ako ti se prdi idi u wc pa se izduvaj',
  'Sve ti je to pričam ti priču',
  'Gde ste mačkići',
  'Sve to ide po inerciji',
  'Vaš posao je deco sedeći',
  'Buongiorno, come stai signore? Bene, molto bene ili najjebene?',
  'Pa ja vam pričam, a vi kako hoćete', 
  'Nama je slava kad vi dođete',
  'Da je dobro da se peče meso i kurjaci bi ga pekli', 
  'Još godina 100 kako kaže pesma',
  'POZDRAV IZ KNJAZEVCA.',
  'Evo ga trtoje',
  'Nemoj da ga ljubiš',
  'O. K.',
  'Ne mogu da procenim iz prve',
  'Da zapalimo po jednu',
  'Popijem ponekad tako kratki espreso u kafiću i meni je to dovoljno',
  'Oho hoho',
  'To nije politika, to je život',
  'Danas je SVETI ARHANGEL MIHAJLO, ARANDJELOVDAN!'
];

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    const bodyElement = document.querySelector('body');

    const refreshButton = document.querySelector('#refresh');
    refreshButton.addEventListener('click', _event => {
      setRandomQuote();
    });

    const switchInput = document.querySelector('#switcher input');
    switchInput.addEventListener('click', _event => {
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

    const currentDate = new Date();
    const currentDateAtEightPM = new Date(currentDate);
    currentDateAtEightPM.setHours(20, 0, 0);
    const currentDateAtEightAM = new Date(currentDate);
    currentDateAtEightAM.setHours(8, 0, 0);

    if (!(currentDate > currentDateAtEightAM && currentDate < currentDateAtEightPM)) {
      switchInput.checked = true;
      bodyElement.setAttribute('data-theme', 'dark');
      refreshButton.classList.remove('btn-outline-dark');
      refreshButton.classList.add('btn-outline-light');
    }

    setRandomQuote();
  }
}

function setRandomQuote() {
  const quoteElement = document.querySelector('#quote');
  const randomNumber = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomNumber];
}
