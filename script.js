
/* ===================================
   MY MATH JOURNEY
   =================================== */

/* ADD YOUR QUESTIONS HERE */

const questions = [
  {
    question: "What is 1 + 1?",
    answers: ["2", "1"],
    correct: "2",
    explanation: `
      Start with <span class="blue">1</span>
      and add <span class="purple">1 more</span>.

      <p class="green">
        1 + 1 = 2
      </p>

      🎉 The correct answer is 2!
    `
  },

  {
    question: "What is 5 + 3?",
    answers: ["7", "8"],
    correct: "8",
    explanation: `
      Start at <span class="blue">5</span>
      and count <span class="purple">3 more</span>.

      <p class="yellow">
        6 → 7 → 8
      </p>

      <p class="green">
        5 + 3 = 8
      </p>

      🎯 The correct answer is 8!
    `
  },

  {
    question: "What is 6 × 4?",
    answers: ["24", "20"],
    correct: "24",
    explanation: `
      Multiplication means
      <span class="pink">repeated addition</span>.

      <p class="blue">
        6 + 6 + 6 + 6
      </p>

      <p class="green">
        = 24
      </p>

      🌟 So 6 × 4 = 24!
    `
  },

  {
    question: "What is 12 × 12?",
    answers: ["144", "124"],
    correct: "144",
    explanation: `
      Break the problem into
      <span class="purple">smaller parts</span>.

      <p class="blue">
        12 × 10 = 120
      </p>

      <p class="yellow">
        12 × 2 = 24
      </p>

      <p class="green">
        120 + 24 = 144
      </p>

      🎉 The answer is 144!
    `
  }
];


/* ===================================
   WEBSITE VARIABLES
   =================================== */

let currentQuestion = 0;

const questionText =
  document.getElementById("questionText");

const questionNumber =
  document.getElementById("questionNumber");

const answer1 =
  document.getElementById("answer1");

const answer2 =
  document.getElementById("answer2");

const result =
  document.getElementById("result");

const nextButton =
  document.getElementById("nextButton");


/* ===================================
   DISPLAY QUESTION
   =================================== */

function showQuestion() {

  const q = questions[currentQuestion];

  questionText.textContent = q.question;

  questionNumber.textContent =
    "QUESTION " + (currentQuestion + 1);

  answer1.textContent = q.answers[0];
  answer2.textContent = q.answers[1];

  answer1.disabled = false;
  answer2.disabled = false;

  answer1.style.background = "";
  answer2.style.background = "";

  result.innerHTML = "";

  nextButton.hidden = true;
}


/* ===================================
   CHECK ANSWER
   =================================== */

function checkAnswer(answer) {

  const q = questions[currentQuestion];

  if (answer === q.correct) {

    // CORRECT ANSWER

    result.innerHTML = `
      <div class="explanation-box">
        <h3 class="green">🎉 Great Job!</h3>

        <p class="yellow">
          You got the correct answer!
        </p>

        <p class="green">
          Keep up the amazing work! 🌟
        </p>
      </div>
    `;

    answer1.disabled = true;
    answer2.disabled = true;

    // CONFETTI

    if (typeof confetti === "function") {

      confetti({
        particleCount: 200,
        spread: 120,
        startVelocity: 45,
        origin: { y: 0.6 }
      });

      setTimeout(function () {

        confetti({
          particleCount: 100,
          spread: 160,
          origin: { x: 0.3, y: 0.5 }
        });

      }, 300);

      setTimeout(function () {

        confetti({
          particleCount: 100,
          spread: 160,
          origin: { x: 0.7, y: 0.5 }
        });

      }, 600);

    }

    // NEXT QUESTION BUTTON

    if (currentQuestion === questions.length - 1) {
      nextButton.textContent = "Start Again ↻";
    } else {
      nextButton.textContent = "Next Question →";
    }

    nextButton.hidden = false;

  } else {

    // WRONG ANSWER

    result.innerHTML = `
      <div class="explanation-box">

        <h3>💡 Let's Learn Why!</h3>

        <p class="wrong-message">
          ❌ Not quite! Let's try again.
        </p>

        <div class="explanation-content">
          ${q.explanation}
        </div>

      </div>
    `;

  }
}


/* ===================================
   ANSWER BUTTON EVENTS
   =================================== */

answer1.addEventListener("click", function () {
  checkAnswer(answer1.textContent);
});

answer2.addEventListener("click", function () {
  checkAnswer(answer2.textContent);
});


/* ===================================
   NEXT QUESTION
   =================================== */

nextButton.addEventListener("click", function () {

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }

  showQuestion();

});


/* ===================================
   START THE QUIZ
   =================================== */

showQuestion();
