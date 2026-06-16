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

const navbar = document.querySelector(".navbar");
const burgerToggle = document.querySelector(".burger-toggle");
let navTimer;

const collapseNav = () => {
  navbar.classList.add("nav-collapsed");
  navbar.classList.remove("nav-open");
  burgerToggle.setAttribute("aria-expanded", "false");
};

const expandNav = () => {
  navbar.classList.remove("nav-collapsed");
  navbar.classList.add("nav-open");
  burgerToggle.setAttribute("aria-expanded", "true");
  window.clearTimeout(navTimer);
  navTimer = window.setTimeout(collapseNav, 10000);
};

navTimer = window.setTimeout(collapseNav, 10000);

burgerToggle.addEventListener("click", expandNav);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    window.clearTimeout(navTimer);
    navTimer = window.setTimeout(collapseNav, 10000);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", anchor.getAttribute("href"));
  });
});

const floatingWhatsapp = document.querySelector(".floating-whatsapp");
const mainWhatsapp = document.querySelector(".whatsapp-btn");

const whatsappObserver = new IntersectionObserver(
  (entries) => {
    const isVisible = entries.some((entry) => entry.isIntersecting);
    floatingWhatsapp.classList.toggle("is-absorbed", isVisible);
    mainWhatsapp.classList.toggle("is-magnet", isVisible);
  },
  { threshold: 0.46 }
);

whatsappObserver.observe(mainWhatsapp);

const gallerySection = document.querySelector(".gallery-section");
const galleryGrid = document.querySelector(".gallery-grid");

const markGalleryTouched = () => {
  gallerySection.classList.add("gallery-touched");
};

["pointerdown", "touchstart", "wheel", "scroll"].forEach((eventName) => {
  galleryGrid.addEventListener(eventName, markGalleryTouched, { passive: true });
});
