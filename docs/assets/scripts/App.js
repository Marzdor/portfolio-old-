window.onload = function () {
  genPortfolio();
}

function genPortfolio() {
  const baseNames = ["calculator", "localWeatherApp", "pomodoroClock", "quoteApp", "tictactoe", "travel-site-tut", "twitchStreamList", "wikipediaViewer"];

  for (let i = 0; i < baseNames.length; i++) {
    const markup = `
    <a class="portfolio-image" href="https://marzdor.github.io/${baseNames[i]}">
      <img src="assets/images/${baseNames[i]}_small.png" srcset="assets/images/${baseNames[i]}.png 1400w" alt="Thumbnail of ${baseNames[i]} website.">
    </a>
    `;
    const target = document.querySelector(".portfolio");
    target.insertAdjacentHTML("beforeend", markup);
  }
}