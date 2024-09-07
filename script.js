const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.link');

menu.addEventListener('click', () => {
  menuToggle.classList.toggle('menushow');
});