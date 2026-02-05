const settings = {
  herName: "My Favorite Person",
  yourName: "[Your Name]",
  revealMessage:
    "Pick a day and I will bring the flowers, the playlist, and the snacks.",
};

const herNameEl = document.getElementById("herName");
const yourNameEl = document.getElementById("yourName");
const secretEl = document.getElementById("secret");
const secretTextEl = document.querySelector(".secret-text");
const yesBtn = document.getElementById("yesBtn");
const detailsBtn = document.getElementById("detailsBtn");

herNameEl.textContent = settings.herName;
yourNameEl.textContent = settings.yourName;
secretTextEl.textContent = settings.revealMessage;

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

yesBtn.addEventListener("click", () => {
  reveal();
  burstHearts();
});

detailsBtn.addEventListener("click", reveal);
