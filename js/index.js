window.addEventListener("load", function() {
  const bodyEl = document.querySelector("body");
  const themes = ["one", "two", "three", "four", "five"];

  setInterval(() => {
    // Filter out current theme
    const filteredThemes = themes.filter(
      t => `theme_${t}` !== bodyEl.className
    );
    const selectedTheme = Math.floor(Math.random() * filteredThemes.length);
    bodyEl.className = `theme_${filteredThemes[selectedTheme]}`;
  }, 6000);
});
