
window.addEventListener('load', function() {
  const bodyEl = document.querySelector('body');
  const themes = ['one', 'two', 'three', 'four', 'five'];

  setInterval(() => {
    // Filter out current theme
    const filteredThemes = themes.filter((t) => `theme_${t}` !== bodyEl.className);
    const selectedTheme = Math.floor(Math.random() * 6);
    bodyEl.className = `theme_${filteredThemes[selectedTheme]}`;
  }, 7000);
})
