const settings = {
  herName: "Little baby Pooch",
  yourName: "Not Stinky",
};


const herNameEl = document.getElementById("herName");
const yourNameEl = document.getElementById("yourName");
const secretEl = document.getElementById("secret");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesGagEl = document.getElementById("yesGag");
const noGagEl = document.getElementById("noGag");
const buttonsEl = document.querySelector(".buttons");
let noClicks = 0;
let noGagTimer = null;
let yesGagTimer = null;

herNameEl.textContent = settings.herName;
yourNameEl.textContent = settings.yourName;

const reveal = () => {
  if (!secretEl.classList.contains("hidden")) return;
  secretEl.classList.remove("hidden");
  secretEl.scrollIntoView({ behavior: "smooth", block: "center" });
};

const burstHearts = () => {
  const count = 14;
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.top = `${60 + Math.random() * 20}%`;
    heart.style.animationDelay = `${Math.random() * 0.2}s`;
    heart.style.opacity = `${0.6 + Math.random() * 0.4}`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1800);
  }
};

const swapButtons = () => {
  buttonsEl.classList.toggle("swapped");
};

const showPopup = (el, timerRef, durationMs = 1600) => {
  if (timerRef) {
    clearTimeout(timerRef);
  }
  el.classList.remove("hidden");
  el.classList.add("show");
  return setTimeout(() => {
    el.classList.remove("show");
    el.classList.add("hidden");
  }, durationMs);
};

yesBtn.addEventListener("click", () => {
  reveal();
  burstHearts();
  noGagEl.classList.add("hidden");
  noGagEl.classList.remove("show");
  if (noGagTimer) {
    clearTimeout(noGagTimer);
    noGagTimer = null;
  }
  yesGagTimer = showPopup(yesGagEl, yesGagTimer);
  noClicks = 0;
  yesBtn.disabled = true;
  noBtn.disabled = true;
});

noBtn.addEventListener("click", () => {
  noClicks += 1;
  if (noClicks <= 2) {
    noGagTimer = showPopup(noGagEl, noGagTimer);
  }
  swapButtons();
});
