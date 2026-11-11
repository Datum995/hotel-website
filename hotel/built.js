const arrival = document.querySelector('#checkin');
const departure = document.querySelector('#checkout');
const status = document.querySelector('#message');

const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
const minDate = today.toISOString().slice(0, 10);

arrival.min = minDate;
departure.min = minDate;

arrival.addEventListener('change', () => {
   if (!arrival.value) return;

   const next = new Date(arrival.value + 'T12:00:00');
   next.setDate(next.getDate() + 1);
   const min = next.toISOString().slice(0, 10);
   departure.min = min;

   if (departure.value && departure.value <= arrival.value) {
      departure.value = min;
   }
});

document.querySelector('#booking').addEventListener('submit', event => {
   event.preventDefault();

   if (!arrival.value || !departure.value || departure.value <= arrival.value) {
      status.textContent = 'Please choose a check-out date after your check-in date.';
   } else {
      const nights = Math.round(
         (new Date(departure.value + 'T12:00:00') -
            new Date(arrival.value + 'T12:00:00')) / 86400000
      );
      status.textContent = `Your ${nights}-night stay is ready to check. Call +2347044488768 to complete your reservation.`;
   }

   status.classList.add('show');
});

const button = document.querySelector('.menu-toggle');
button.addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('open');
});