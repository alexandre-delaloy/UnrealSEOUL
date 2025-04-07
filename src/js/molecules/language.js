import { scrollBottomOverflow } from "../config";

const DOM_header = document.querySelector('.header');
const DOM_method = document.querySelector('.method');
const DOM_random = document.querySelector('.random');

const DOM_langEN = document.querySelector('.header_language_en');
const DOM_langKR = document.querySelector('.header_language_kr');
const DOM_langTransition = document.querySelector('.header_language-change');

const toggleLanguageCTA = () => {
  DOM_langTransition.classList.toggle('header_language-change-toLeft');
  DOM_langTransition.classList.toggle('header_language-change-toRight');
}

DOM_langEN.addEventListener('click', function () {
  toggleLanguageCTA();
});
DOM_langKR.addEventListener('click', function () {
  toggleLanguageCTA();
});


window.addEventListener('scroll', function () {
  if (window.scrollY < scrollBottomOverflow) {
    DOM_langEN.classList.add('colorChange');
    DOM_langKR.classList.add('colorChange');
    DOM_langTransition.classList.add('gradientBackgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight - scrollBottomOverflow) {
    DOM_langEN.classList.remove('colorChange');
    DOM_langKR.classList.remove('colorChange');
    DOM_langTransition.classList.remove('gradientBackgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight - scrollBottomOverflow) {
    DOM_langEN.classList.add('colorChange');
    DOM_langKR.classList.add('colorChange');
    DOM_langTransition.classList.add('gradientBackgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight + DOM_random.offsetHeight - scrollBottomOverflow) {
    DOM_langEN.classList.remove('colorChange');
    DOM_langKR.classList.remove('colorChange');
    DOM_langTransition.classList.remove('gradientBackgroundChange');
  } else {
    DOM_langEN.classList.add('colorChange');
    DOM_langKR.classList.add('colorChange');
    DOM_langTransition.classList.add('gradientBackgroundChange');
  }
})
