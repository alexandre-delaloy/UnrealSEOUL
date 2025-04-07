import '../molecules/logo.js'
import '../molecules/menu.js'
import '../molecules/sound.js'
import '../molecules/language.js'
import '../molecules/typewriter.js'

const DOM_headerView = document.querySelector("#header");

window.addEventListener("scroll", () => {
  let yPos = window.pageYOffset / DOM_headerView.dataset.speed;
  yPos = +yPos;
  let coords = '0% ' + yPos + 'px';
  DOM_headerView.style.backgroundPosition = coords;
});



var DOM_goToAnchorHome = document.querySelector('.header_menu_overlay_item-1');
var DOM_goToAnchorMethod = document.querySelector('.header_menu_overlay_item-2');
var DOM_goToAnchorRandom = document.querySelector('.header_menu_overlay_item-3');
var DOM_goToAnchorDistrict = document.querySelector('.header_menu_overlay_item-4');
var DOM_anchorHome = document.querySelector('#header');
var DOM_anchorMethod = document.querySelector('#method');
var DOM_anchorRandom = document.querySelector('#random');
var DOM_anchorDistrict = document.querySelector('#district');

DOM_goToAnchorHome.addEventListener('click', () => {
  DOM_anchorHome.scrollIntoView({
    behavior: 'smooth'
  });
});
DOM_goToAnchorMethod.addEventListener('click', () => {
  DOM_anchorMethod.scrollIntoView({
    behavior: 'smooth'
  });
});
DOM_goToAnchorRandom.addEventListener('click', () => {
  DOM_anchorRandom.scrollIntoView({
    behavior: 'smooth'
  });
});
DOM_goToAnchorDistrict.addEventListener('click', () => {
  DOM_anchorDistrict.scrollIntoView({
    behavior: 'smooth'
  });
});