const feedbackForm = document.querySelector('form');
    const successMessage = document.querySelector('.success-message');

    feedbackForm.addEventListener('submit', function (event) {
      event.preventDefault();
      successMessage.hidden = false;
      feedbackForm.reset();
    });

const button = document.querySelector('.menu-toggle');
button.addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('open');
});