const accArea = document.querySelectorAll('.accordion');

if(accArea) {
  accArea.forEach((area) => {
    area.classList.add('accordion--closed');
    area.addEventListener('click', () => {
      area.classList.toggle('accordion--closed');
    });
  });
}
