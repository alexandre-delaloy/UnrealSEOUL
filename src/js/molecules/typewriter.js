const carrouselWrap = document.querySelector('.header_typewriter_items');
const carouselItemArray = document.querySelectorAll('.header_typewriter_item');

const carrouselWidth = 100;
const btnRight = document.querySelector('.right');
let counter = 0;

const showNextPlace = () => {
  carrouselWrap.classList.add('header_typewriter_transition');
  counter++;

  if (counter > carouselItemArray.length - 1) {
    counter = 0;
    const item = carouselItemArray[carouselItemArray.length - 1];
    carrouselWrap.insertBefore(item, carrouselWrap.childNodes[0]);
    carrouselWrap.classList.remove('header_typewriter_transition');
    carrouselWrap.style.transform = 'translateY(-' + counter * carrouselWidth + "px)";
    setTimeout(() => {
      showNextPlace();
    }, 1);
  } else {
    carrouselWrap.style.transform = 'translateY(-' + counter * carrouselWidth + "px)";
  }
};

btnRight.addEventListener('click', function () {
  showNextPlace();
});

const DOM_input = document.querySelector('.header_button_input');
const DOM_cta = document.querySelector('.header_button_search');

DOM_input.addEventListener('click', () => {
  DOM_input.removeAttribute('disabled');
  DOM_input.removeAttribute('value');
  DOM_input.setAttribute('placeholder', ' Enter what you want to visit');
  DOM_input.classList.add('header_button_input-anim');
  DOM_cta.classList.add('loader_active');
});
