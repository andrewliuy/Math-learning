
// ADD YOUR QUESTIONS HERE!

const questions = [
  {
    question: "What is 1 + 1?",
    answers: ["2", "1"],
    correct: "2",
  },

  {
    question: "What is 5 + 3?",
    answers: ["7", "8"],
    correct: "8",
  },

  {
    question: "What is 6 × 4?",
    answers: ["24", "20"],
    correct: "24"
  },
  {
  question: "What is 6 × 56?",
  answers: ["336", "346"],
  correct: "336",
  explanation: "6x50=300 and 6x6=36  so the answer is 300+36=336"
  },
  {
  question: "I have 4 pants, 3 underwhere and 2 shirts how many ways can I dress up",
  answers: ["24", "9"],
  correct: "24",
  explanation: "The answer is 4x3x2 not 4+3+2"
  }
];

// WEBSITE CODE BELOW
// You usually don't need to change this part.

let currentQuestion = 0;

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const result = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function showQuestion() {
  const q = questions[currentQuestion];

  questionText.textContent = q.question;
  questionNumber.textContent =
    "QUESTION " + (currentQuestion + 1);

  answer1.textContent = q.answers[0];
  answer2.textContent = q.answers[1];

  answer1.disabled = false;
  answer2.disabled = false;

  result.textContent = "";
  nextButton.hidden = true;
}


function checkAnswer(answer) {
  const q = questions[currentQuestion];

  if (answer === q.correct) {

    result.textContent = "🎉 Great job!";
    result.style.color = "#4ade80";

    answer1.disabled = true;
    answer2.disabled = true;

    if (typeof confetti === "function") {
      confetti({
        particleCount: 150,
        spread: 100
      });
    }

    nextButton.textContent =
      currentQuestion === questions.length - 1
        ? "Start Again ↻"
        : "Next Question →";

    nextButton.hidden = false;

  } else {

    result.textContent =
      "❌ Not quite! Try again!\n\n" +
      "💡 Explanation: " + q.explanation;

    result.style.color = "#fbbf24";
  }
}

answer1.addEventListener("click", function () {
  checkAnswer(answer1.textContent);
});

answer2.addEventListener("click", function () {
  checkAnswer(answer2.textContent);
});

nextButton.addEventListener("click", function () {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }

  showQuestion();
});

showQuestion();
