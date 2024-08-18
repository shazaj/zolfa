document.addEventListener('DOMContentLoaded', function() {
  const languageSelector = document.getElementById('language-selector');
  const selectedOption = languageSelector.querySelector('.selected-option');
  const options = languageSelector.querySelector('#language-options');
  const languageText = {
      en: 'Francais',
      ar: 'العربية'
  };

  // Afficher les options au clic sur le sélecteur
  selectedOption.addEventListener('click', function() {
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });

  // Gérer la sélection d'une langue
  options.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          const selectedValue = event.target.getAttribute('data-value');
          const selectedText = languageText[selectedValue];
          const selectedIcon = event.target.querySelector('img').src;

          // Mettre à jour le texte et l'icône du sélecteur
          selectedOption.innerHTML = `<img src="${selectedIcon}" alt="Selected Icon" class="icon-small"> ${selectedText} <svg class="fleche-icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

          // Cacher les options après la sélection
          options.style.display = 'none';
      }
  });

  // Cacher les options lorsqu'on clique en dehors du sélecteur
  document.addEventListener('click', function(event) {
      if (!languageSelector.contains(event.target)) {
          options.style.display = 'none';
      }
  });
});
