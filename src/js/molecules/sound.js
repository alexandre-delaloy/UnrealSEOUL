import { audioVolume, scrollBottomOverflow } from "../config";

const DOM_header = document.querySelector('.header');
const DOM_method = document.querySelector('.method');
const DOM_random = document.querySelector('.random');

var DOM_audio = document.querySelector('#audio');
var DOM_mute1 = document.querySelector('.header_music_before');
var DOM_mute2 = document.querySelector('.header_music');
var DOM_mute3 = document.querySelector('.header_music_after');

DOM_audio.volume = audioVolume;
DOM_mute2.addEventListener('click', () => {
  DOM_audio.muted = !DOM_audio.muted
  DOM_mute1.classList.toggle('header_music_before-pulse');
  DOM_mute3.classList.toggle('header_music_after-pulse');
});


window.addEventListener('scroll', function () {
  if (window.scrollY < scrollBottomOverflow) {
    DOM_mute1.classList.add('backgroundChange');
    DOM_mute2.classList.add('backgroundChange');
    DOM_mute3.classList.add('backgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight - scrollBottomOverflow) {
    DOM_mute1.classList.remove('backgroundChange');
    DOM_mute2.classList.remove('backgroundChange');
    DOM_mute3.classList.remove('backgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight - scrollBottomOverflow) {
    DOM_mute1.classList.add('backgroundChange');
    DOM_mute2.classList.add('backgroundChange');
    DOM_mute3.classList.add('backgroundChange');
  } else if (window.scrollY < DOM_header.offsetHeight + DOM_method.offsetHeight + DOM_random.offsetHeight - scrollBottomOverflow) {
    DOM_mute1.classList.remove('backgroundChange');
    DOM_mute2.classList.remove('backgroundChange');
    DOM_mute3.classList.remove('backgroundChange');
  } else {
    DOM_mute1.classList.add('backgroundChange');
    DOM_mute2.classList.add('backgroundChange');
    DOM_mute3.classList.add('backgroundChange');
  }
})