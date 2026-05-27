const targetDate = new Date("2026-08-28T00:00:00+01:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");

const pad = (number, length = 2) => String(number).padStart(length, "0");

function updateCountdown() {
  const now = Date.now();
  let distance = targetDate - now;

  if (distance <= 0) {
    distance = 0;
  }

  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);
  const seconds = Math.floor((distance % 60_000) / 1_000);
  const milliseconds = Math.floor(distance % 1_000);

  daysEl.textContent = pad(days, 3);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  millisecondsEl.textContent = pad(milliseconds, 3);

  requestAnimationFrame(updateCountdown);
}

updateCountdown();
