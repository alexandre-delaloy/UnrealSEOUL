
const DOM_loader = document.querySelector('.loader');
const DOM_loaderEnter = document.querySelector('.loader_enter');
const DOM_audioPlayer = document.querySelector('#audio');

setTimeout(() => {
  DOM_loaderEnter.style.display = "block"
}, 2000);

DOM_loaderEnter.addEventListener("click", () => {
  DOM_loader.classList.remove('loader_active');
  DOM_audioPlayer.play()
});
