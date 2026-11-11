document.addEventListener('DOMContentLoaded', () => {
const lightbox = document.getElementById('lightbox');
const images = document.querySelectorAll('.hotel-images img');
images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.querySelector('img').src = image.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
});

const button = document.querySelector('.menu-toggle');
button.addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('open');
});