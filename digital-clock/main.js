function updateClockAndDate() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const hoursEl = document.querySelector('#hours');
  const minutesEl = document.querySelector('#minutes');
  const secondsEl = document.querySelector('#seconds');

  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;

  const dateEl = document.querySelector('#date');
  if (dateEl) {
    const formatted = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
    dateEl.textContent = formatted;
  }
}

updateClockAndDate();
setInterval(updateClockAndDate, 1000);