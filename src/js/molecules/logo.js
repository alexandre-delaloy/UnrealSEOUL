import { colors } from "../config.js"

const DOM_header = document.querySelector('.header');
const DOM_method = document.querySelector('.method');
const DOM_random = document.querySelector('.random');

const DOM_logoStroke = document.querySelector('#logoStroke');

window.addEventListener('scroll', function () {
  if (window.scrollY < DOM_header.offsetHeight - 50) {
    DOM_logoStroke.setAttribute('stop-color', colors.white);
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight - 50) {
    DOM_logoStroke.setAttribute('stop-color', colors.purple);
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight + DOM_random.offsetHeight - 50) {
    DOM_logoStroke.setAttribute('stop-color', colors.white);
  } else {
    DOM_logoStroke.setAttribute('stop-color', colors.purple);
  }
});
