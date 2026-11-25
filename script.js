
const correctButton =
  document.getElementById("correctButton");

const wrongButton =
  document.getElementById("wrongButton");

const result =
  document.getElementById("result");

// CORRECT ANSWER

correctButton.addEventListener("click", function () {

  result.textContent = "🎉 Great job! 1 + 1 = 2!";
  result.style.color = "#4ade80";

  correctButton.style.background = "#16a34a";

  // Confetti explosion
  if (typeof confetti === "function") {

    confetti({
      particleCount: 200,
      spread: 120,
      startVelocity: 45,
      origin: { y: 0.6 }
    });

    // Second explosion
    setTimeout(function () {
      confetti({
        particleCount: 120,
        spread: 160,
        origin: { x: 0.3, y: 0.5 }
      });
    }, 300);

    // Third explosion
    setTimeout(function () {
      confetti({
        particleCount: 120,
        spread: 160,
        origin: { x: 0.7, y: 0.5 }
      });
    }, 600);

  }

});

// WRONG ANSWER

wrongButton.addEventListener("click", function () {

  result.textContent = "❌ Not quite! Try again!";
  result.style.color = "#f87171";

  wrongButton.style.background = "#dc2626";

  setTimeout(function () {
    wrongButton.style.background = "";
  }, 1000);

});
