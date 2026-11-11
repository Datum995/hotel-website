const button = document.querySelector('.menu-toggle');
button.addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('open');
});