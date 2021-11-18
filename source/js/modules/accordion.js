const accArea = document.querySelectorAll('.accordion');


accArea.forEach((area) => {
  area.classList.add('accordion--closed')
  area.addEventListener('click', () => {
    area.classList.toggle('accordion--closed');
  });
});

