// Countdown target: 28 August 2026 at 00:00 in Europe/London time.
// Change this line if you want the countdown to end at a different time.
const TARGET_DATE = new Date("2026-08-28T00:00:00+01:00").getTime();

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  milliseconds: document.getElementById("milliseconds"),
  year: document.getElementById("year"),
  glow: document.querySelector(".cursor-glow"),
  panel: document.querySelector(".countdown-panel")
};

elements.year.textContent = new Date().getFullYear();

const pad = (value, size = 2) => String(value).padStart(size, "0");

function setValue(name, value) {
  const element = elements[name];
  if (!element || element.textContent === value) return;

  element.textContent = value;

  if (name !== "milliseconds") {
    element.classList.remove("tick");
    void element.offsetWidth;
    element.classList.add("tick");
  }
}

function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(TARGET_DATE - now, 0);

  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minuteMs = 60 * 1000;
  const secondMs = 1000;

  const days = Math.floor(distance / dayMs);
  const hours = Math.floor((distance % dayMs) / hourMs);
  const minutes = Math.floor((distance % hourMs) / minuteMs);
  const seconds = Math.floor((distance % minuteMs) / secondMs);
  const milliseconds = distance % secondMs;

  setValue("days", pad(days, 3));
  setValue("hours", pad(hours));
  setValue("minutes", pad(minutes));
  setValue("seconds", pad(seconds));
  setValue("milliseconds", pad(milliseconds, 3));

  requestAnimationFrame(updateCountdown);
}

requestAnimationFrame(updateCountdown);

window.addEventListener("pointermove", (event) => {
  const { clientX, clientY } = event;

  if (elements.glow) {
    elements.glow.style.left = `${clientX}px`;
    elements.glow.style.top = `${clientY}px`;
  }

  if (elements.panel && window.matchMedia("(hover: hover)").matches) {
    const rect = elements.panel.getBoundingClientRect();
    const panelX = clientX - rect.left;
    const panelY = clientY - rect.top;

    if (panelX >= 0 && panelX <= rect.width && panelY >= 0 && panelY <= rect.height) {
      const rotateX = ((panelY / rect.height) - 0.5) * -4;
      const rotateY = ((panelX / rect.width) - 0.5) * 4;
      elements.panel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else {
      elements.panel.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  }
});

window.addEventListener("pointerleave", () => {
  if (elements.panel) {
    elements.panel.style.transform = "rotateX(0deg) rotateY(0deg)";
  }
});
