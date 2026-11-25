
const button = document.getElementById("confettiButton");

button.addEventListener("click", function () {
  for (let i = 0; i < 150; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  const colors = [
    "#ff0000",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#ff00ff",
    "#ff8800"
  ];

  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  confetti.style.left = Math.random() * 100 + "vw";

  confetti.style.animationDuration =
    (Math.random() * 3 + 2) + "s";

  confetti.style.animationDelay =
    Math.random() * 0.8 + "s";

  document.body.appendChild(confetti);

  confetti.addEventListener("animationend", function () {
    confetti.remove();
  });
}

