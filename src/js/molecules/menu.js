import { scrollTopOverflow } from '../config.js'

const DOM_header = document.querySelector('.header');
const DOM_method = document.querySelector('.method');
const DOM_random = document.querySelector('.random');

const DOM_menuCTA = document.querySelector('.header_menu_cta');
const DOM_menuOverlay = document.querySelector('.header_menu_overlay');
const DOM_menuL1 = document.querySelector('.header_menu_cta_firstLine_before');
const DOM_menuL2 = document.querySelector('.header_menu_cta_firstLine');
const DOM_menuL3 = document.querySelector('.header_menu_cta_lastLine');
const DOM_menuL4 = document.querySelector('.header_menu_cta_lastLine_after');
const DOM_menuItems = document.querySelectorAll('.header_menu_overlay_items');

const toggleMenuCTA = () => {
  DOM_menuOverlay.classList.toggle('header_menu_overlay-active');
  DOM_menuL2.classList.toggle('header_menu_cta_firstLine-anim');
  DOM_menuL1.classList.toggle('header_menu_cta_firstLine-befafter');
  DOM_menuL3.classList.toggle('header_menu_cta_lastLine-anim');
  DOM_menuL4.classList.toggle('header_menu_cta_firstLine-befafter');
}
DOM_menuItems.forEach(item => {
  item.addEventListener('click', () => {
    toggleMenuCTA();
  });
});

DOM_menuCTA.addEventListener('click', () => {
  toggleMenuCTA();
});

window.addEventListener('scroll', () => {
  if (window.scrollY < DOM_header.offsetHeight - scrollTopOverflow) {
    DOM_menuL2.classList.add('backgroundChange');
    DOM_menuL3.classList.add('backgroundChange');
    DOM_menuL1.classList.add('backgroundChange');
    DOM_menuL4.classList.add('backgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight - scrollTopOverflow) {
    DOM_menuL2.classList.remove('backgroundChange');
    DOM_menuL3.classList.remove('backgroundChange');
    DOM_menuL1.classList.remove('backgroundChange');
    DOM_menuL4.classList.remove('backgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight + DOM_random.offsetHeight - scrollTopOverflow) {
    DOM_menuL2.classList.add('backgroundChange');
    DOM_menuL3.classList.add('backgroundChange');
    DOM_menuL1.classList.add('backgroundChange');
    DOM_menuL4.classList.add('backgroundChange');
  } else {
    DOM_menuL2.classList.remove('backgroundChange');
    DOM_menuL3.classList.remove('backgroundChange');
    DOM_menuL1.classList.remove('backgroundChange');
    DOM_menuL4.classList.remove('backgroundChange');
  }
});
