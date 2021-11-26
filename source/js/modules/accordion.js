const accArea = document.querySelectorAll('.accordion');
const accTitle = document.querySelectorAll('.accordion h3');

if(accArea) {
  accArea.forEach((area, index) => {
    area.classList.add('accordion--closed');
    accTitle[index].addEventListener('click', () => {
      area.classList.toggle('accordion--closed');
    });
  });
}
