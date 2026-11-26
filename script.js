
/* ==========================================
   MY MATH JOURNEY - 30 QUESTION CHALLENGE
   ========================================== */

/* ==========================================
   QUESTIONS
   ========================================== */

const questions = [

  // ===== ARITHMETIC: 1-10 =====

  {
    question: "What is 1 + 1?",
    answers: ["2", "1"],
    correct: "2",
    explanation: `
      Start with <span class="blue">1</span>
      and add <span class="purple">1 more</span>.
      <p class="green">1 + 1 = 2</p>
    `
  },

  {
    question: "What is 5 + 3?",
    answers: ["7", "8"],
    correct: "8",
    explanation: `
      Count three numbers after 5:
      <p class="yellow">6 → 7 → 8</p>
      <p class="green">5 + 3 = 8</p>
    `
  },

  {
    question: "What is 6 × 4?",
    answers: ["24", "20"],
    correct: "24",
    explanation: `
      Multiplication is repeated addition.
      <p class="blue">6 + 6 + 6 + 6 = 24</p>
    `
  },

  {
    question: "What is 12 × 12?",
    answers: ["144", "124"],
    correct: "144",
    explanation: `
      Break 12 × 12 into smaller parts.
      <p class="blue">12 × 10 = 120</p>
      <p class="purple">12 × 2 = 24</p>
      <p class="green">120 + 24 = 144</p>
    `
  },

  {
    question: "What is 81 ÷ 9?",
    answers: ["9", "8"],
    correct: "9",
    explanation: `
      Division is the opposite of multiplication.
      <p class="green">9 × 9 = 81</p>
    `
  },

  {
    question: "What is 2 to the power of 5?",
    answers: ["32", "25"],
    correct: "32",
    explanation: `
      An exponent means repeated multiplication.
      <p class="blue">2 × 2 × 2 × 2 × 2</p>
      <p class="green">= 32</p>
    `
  },

  {
    question: "What is 3/4 of 20?",
    answers: ["15", "12"],
    correct: "15",
    explanation: `
      First divide by 4.
      <p class="blue">20 ÷ 4 = 5</p>
      Then multiply by 3.
      <p class="green">5 × 3 = 15</p>
    `
  },

  {
    question: "What is 15% of 200?",
    answers: ["30", "15"],
    correct: "30",
    explanation: `
      Find 10% and 5%.
      <p class="blue">10% of 200 = 20</p>
      <p class="purple">5% of 200 = 10</p>
      <p class="green">20 + 10 = 30</p>
    `
  },

  {
    question: "What is the greatest common factor of 18 and 24?",
    answers: ["6", "12"],
    correct: "6",
    explanation: `
      List the common factors.
      <p class="blue">1, 2, 3, 6</p>
      <p class="green">The greatest is 6.</p>
    `
  },

  {
    question: "What is the least common multiple of 6 and 8?",
    answers: ["24", "48"],
    correct: "24",
    explanation: `
      Multiples of 6: 6, 12, 18, 24...
      <p class="purple">
        Multiples of 8: 8, 16, 24...
      </p>
      <p class="green">
        The first common multiple is 24.
      </p>
    `
  },

  // ===== COUNTING: 11-20 =====

  {
    question: "You have 3 shirts and 2 pairs of pants. How many outfits can you make?",
    answers: ["6", "5"],
    correct: "6",
    explanation: `
      Use the <span class="yellow">
      multiplication principle</span>.
      <p class="blue">3 shirt choices</p>
      <p class="purple">2 pants choices</p>
      <p class="green">3 × 2 = 6 outfits</p>
    `
  },

  {
    question: "How many ways can you arrange 3 different books in a row?",
    answers: ["6", "9"],
    correct: "6",
    explanation: `
      There are 3 choices for the first position,
      2 for the second, and 1 for the third.
      <p class="green">3 × 2 × 1 = 6</p>
    `
  },

  {
    question: "How many two-digit numbers can you make using 1, 2, and 3 without repeating digits?",
    answers: ["6", "9"],
    correct: "6",
    explanation: `
      Choose the tens digit in 3 ways.
      <p class="blue">Then choose the ones digit in 2 ways.</p>
      <p class="green">3 × 2 = 6</p>
    `
  },

  {
    question: "How many ways can you choose 2 students from a group of 5?",
    answers: ["10", "20"],
    correct: "10",
    explanation: `
      There are 5 × 4 ordered choices.
      But each pair is counted twice.
      <p class="green">(5 × 4) ÷ 2 = 10</p>
    `
  },

  {
    question: "How many different outcomes are possible when flipping 3 coins?",
    answers: ["8", "6"],
    correct: "8",
    explanation: `
      Each coin has 2 possible outcomes.
      <p class="green">2 × 2 × 2 = 8</p>
    `
  },

  {
    question: "How many ways can 4 people line up?",
    answers: ["24", "16"],
    correct: "24",
    explanation: `
      Choose who stands first, second,
      third, and fourth.
      <p class="green">4 × 3 × 2 × 1 = 24</p>
    `
  },

  {
    question: "How many ways can you choose 3 toppings from 5 different toppings?",
    answers: ["10", "15"],
    correct: "10",
    explanation: `
      Order does not matter.
      <p class="blue">5 × 4 × 3 = 60</p>
      Each group of 3 is counted 6 times.
      <p class="green">60 ÷ 6 = 10</p>
    `
  },

  {
    question: "A password has 2 digits, each from 0 to 9. Repetition is allowed. How many passwords are possible?",
    answers: ["100", "90"],
    correct: "100",
    explanation: `
      Each position has 10 choices.
      <p class="green">10 × 10 = 100</p>
      A password can begin with zero.
    `
  },

  {
    question: "How many diagonals does a pentagon have?",
    answers: ["5", "10"],
    correct: "5",
    explanation: `
      Choose any 2 of the 5 vertices.
      <p class="blue">There are 10 pairs.</p>
      Subtract the 5 sides.
      <p class="green">10 - 5 = 5 diagonals</p>
    `
  },

  {
    question: "How many ways can you choose a president and vice president from 4 students?",
    answers: ["12", "6"],
    correct: "12",
    explanation: `
      The two positions are different,
      so order matters.
      <p class="blue">4 choices for president</p>
      <p class="purple">3 choices for vice president</p>
      <p class="green">4 × 3 = 12</p>
    `
  },

  // ===== GEOMETRY: 21-30 =====

  {
    question: "What is the area of a rectangle with length 8 and width 5?",
    answers: ["40", "26"],
    correct: "40",
    explanation: `
      Rectangle area is length × width.
      <p class="green">8 × 5 = 40 square units</p>
    `
  },

  {
    question: "What is the perimeter of a square with side length 7?",
    answers: ["28", "49"],
    correct: "28",
    explanation: `
      A square has four equal sides.
      <p class="green">4 × 7 = 28 units</p>
    `
  },

  {
    question: "Two angles of a triangle are 50° and 60°. What is the third angle?",
    answers: ["70°", "80°"],
    correct: "70°",
    explanation: `
      Triangle angles add up to 180°.
      <p class="blue">50° + 60° = 110°</p>
      <p class="green">180° - 110° = 70°</p>
    `
  },

  {
    question: "What is the area of a triangle with base 10 and height 6?",
    answers: ["30", "60"],
    correct: "30",
    explanation: `
      Triangle area = base × height ÷ 2.
      <p class="green">10 × 6 ÷ 2 = 30</p>
    `
  },

  {
    question: "A right triangle has legs 3 and 4. What is its hypotenuse?",
    answers: ["5", "7"],
    correct: "5",
    explanation: `
      Use the <span class="yellow">
      Pythagorean theorem</span>.
      <p class="blue">3² + 4² = 9 + 16</p>
      <p class="green">5² = 25, so c = 5</p>
    `
  },

  {
    question: "What is the circumference of a circle with radius 5?",
    answers: ["10π", "25π"],
    correct: "10π",
    explanation: `
      Circumference = 2 × π × radius.
      <p class="green">2 × π × 5 = 10π</p>
    `
  },

  {
    question: "What is the area of a circle with radius 3?",
    answers: ["9π", "6π"],
    correct: "9π",
    explanation: `
      Circle area = π × radius².
      <p class="green">π × 3² = 9π</p>
    `
  },

  {
    question: "How many degrees are in the interior angles of a quadrilateral altogether?",
    answers: ["360°", "180°"],
    correct: "360°",
    explanation: `
      A quadrilateral can be split into
      <span class="purple">2 triangles</span>.
      <p class="green">2 × 180° = 360°</p>
    `
  },

  {
    question: "A rectangular prism measures 3 × 4 × 5. What is its volume?",
    answers: ["60", "47"],
    correct: "60",
    explanation: `
      Volume = length × width × height.
      <p class="green">3 × 4 × 5 = 60 cubic units</p>
    `
  },

  {
    question: "Each interior angle of a regular hexagon measures how many degrees?",
    answers: ["120°", "135°"],
    correct: "120°",
    explanation: `
      A hexagon has 6 sides.
      <p class="blue">
        Interior angle sum = (6 - 2) × 180°
      </p>
      <p class="purple">= 720°</p>
      <p class="green">720° ÷ 6 = 120°</p>
    `
  }
];


/* ==========================================
   QUIZ VARIABLES
   ========================================== */

let currentQuestion = 0;
let score = 0;
let firstTry = true;
let answeredCorrectly = false;

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


/* ==========================================
   CREATE SCORE AND PROGRESS BAR
   ========================================== */

const scoreDisplay = document.createElement("p");
scoreDisplay.id = "scoreDisplay";
scoreDisplay.style.fontWeight = "bold";
scoreDisplay.style.color = "#4ade80";
scoreDisplay.style.fontSize = "20px";

const progressContainer = document.createElement("div");
progressContainer.style.width = "100%";
progressContainer.style.height = "12px";
progressContainer.style.background = "#334155";
progressContainer.style.borderRadius = "20px";
progressContainer.style.overflow = "hidden";
progressContainer.style.marginBottom = "20px";

const progressBar = document.createElement("div");
progressBar.style.height = "100%";
progressBar.style.width = "0%";
progressBar.style.background =
  "linear-gradient(90deg, #38bdf8, #a855f7)";
progressBar.style.transition = "width 0.4s";

progressContainer.appendChild(progressBar);

const questionBox =
  document.querySelector(".question-box");

questionBox.prepend(progressContainer);
questionBox.prepend(scoreDisplay);


/* ==========================================
   UPDATE SCORE AND PROGRESS
   ========================================== */

function updateProgress() {
  scoreDisplay.textContent =
    "⭐ Score: " + score + " / " + questions.length;

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";
}


/* ==========================================
   DISPLAY QUESTION
   ========================================== */

function showQuestion() {

  const q = questions[currentQuestion];

  firstTry = true;
  answeredCorrectly = false;

  questionText.textContent = q.question;

  questionNumber.textContent =
    "QUESTION " + (currentQuestion + 1) +
    " OF " + questions.length;

  answer1.textContent = q.answers[0];
  answer2.textContent = q.answers[1];

  answer1.disabled = false;
  answer2.disabled = false;

  result.innerHTML = "";

  nextButton.hidden = true;

  updateProgress();
}


/* ==========================================
   CHECK ANSWER
   ========================================== */

function checkAnswer(answer) {

  if (answeredCorrectly) {
    return;
  }

  const q = questions[currentQuestion];

  if (answer === q.correct) {

    answeredCorrectly = true;

    if (firstTry) {
      score++;
    }

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

    updateProgress();

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

    nextButton.textContent =
      currentQuestion === questions.length - 1
        ? "See Final Results →"
        : "Next Question →";

    nextButton.hidden = false;

  } else {

    firstTry = false;

    result.innerHTML = `
      <div class="explanation-box">
        <h3>💡 Let's Learn Why!</h3>
        <p class="wrong-message">
          ❌ Not quite! Try again.
        </p>
        <div class="explanation-content">
          ${q.explanation}
        </div>
      </div>
    `;

  }
}


/* ==========================================
   BUTTON EVENTS
   ========================================== */

answer1.addEventListener("click", function () {
  checkAnswer(answer1.textContent);
});

answer2.addEventListener("click", function () {
  checkAnswer(answer2.textContent);
});


/* ==========================================
   NEXT QUESTION / FINAL RESULTS
   ========================================== */

nextButton.addEventListener("click", function () {

  if (currentQuestion === questions.length - 1) {

    showFinalResults();

  } else {

    currentQuestion++;
    showQuestion();

  }

});


/* ==========================================
   FINAL RESULTS
   ========================================== */

function showFinalResults() {

  questionNumber.textContent = "QUIZ COMPLETE!";
  questionText.textContent = "🏆 Amazing Work!";

  answer1.hidden = true;
  answer2.hidden = true;

  progressBar.style.width = "100%";

  result.innerHTML = `
    <div class="explanation-box">
      <h3 class="yellow">🎉 Congratulations!</h3>

      <p class="green">
        Your first-try score:
        ${score} / ${questions.length}
      </p>

      <p class="blue">
        ${Math.round(score / questions.length * 100)}%
      </p>

      <p class="purple">
        Keep practicing and you'll become
        an amazing mathematician!
      </p>
    </div>
  `;

  nextButton.textContent = "Play Again ↻";
  nextButton.hidden = false;

  nextButton.onclick = function () {
    currentQuestion = 0;
    score = 0;

    answer1.hidden = false;
    answer2.hidden = false;

    nextButton.onclick = null;

    showQuestion();
  };
}


/* ==========================================
   START THE QUIZ
   ========================================== */

showQuestion();
