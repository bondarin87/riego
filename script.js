const bootLines = [
  "LOADING RIEGO.GARDEN OS...",
  "CHECKING GPIO RELAYS...",
  "CONNECTING TO ESP32 CONTROL BUS...",
  "SYNCING SMARTPHONE TELEMETRY...",
  "ESTABLISHING HYDRAULIC PRESSURE...",
  "CALCULATING CHRISTIANSEN FRICTION FACTORS...",
  "VALIDATING PC817 OPTO-ISOLATION...",
  "ARMING OFFLINE CONTINGENCY MODE...",
  "CYCLE AND SOAK LOGIC READY...",
  "SYSTEMS ONLINE"
];

const terminal = document.getElementById("bootTerminal");
const loader = document.getElementById("bootLoader");

bootLines.forEach((line, index) => {
  window.setTimeout(() => {
    const row = document.createElement("span");
    row.className = "boot-line";
    row.textContent = `> ${line}`;
    terminal.appendChild(row);
  }, 120 + index * 145);
});

window.setTimeout(() => {
  loader.classList.add("is-glitch");
}, 1900);

window.setTimeout(() => {
  loader.classList.add("is-hidden");
  document.body.classList.add("boot-complete");
}, 2320);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
