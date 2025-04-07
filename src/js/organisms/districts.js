
const DOM_districtsView = document.querySelector('#district');
const DOM_districtsPaths = document.querySelectorAll('.district_svg_path');
const DOM_districtName = document.querySelector('.district_name');


DOM_districtsPaths.forEach(district => {
  district.addEventListener('mouseover', () => {
    DOM_districtName.textContent = district.getAttribute('id');
  });
});
