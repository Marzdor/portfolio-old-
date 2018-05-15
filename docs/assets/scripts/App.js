window.onload = function () {
  genPortfolio();
}

function genPortfolio() {
  const baseNames = ["calculator", "pomodoroClock", "quote", "tictactoe", "travel", "twitchViewer", "weather", "wikipediaViewer"];

  for (let i = 0; i < baseNames.length; i++) {
    const markup = `
    <img class="portfolio-image" src="assets/images/${baseNames[i]}_320x240.png" alt="Thumbnail of ${baseNames[i]} website.">
    `;
    const target = document.querySelector(".portfolio");
    target.insertAdjacentHTML("beforeend", markup);
  }
}