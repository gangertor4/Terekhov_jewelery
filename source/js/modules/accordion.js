const faqBtn = document.querySelectorAll('.faq__item');
const faqAnswer = document.querySelectorAll('.faq__item p');


faqBtn.forEach((btn, index) => {
  btn.classList.add('faq__item--closed')
  btn.addEventListener('click', () => {
    btn.classList.toggle('faq__item--closed');
  });
});
