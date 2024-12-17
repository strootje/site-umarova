let questions = [
  {
    question: "Hoeveel frikandellen zijn er in Nederland?",
    answer: "glitterjurk",
  },
  { question: "Waarom is een panda geel?", answer: "hoender43" },
  { question: "Wat betekend 'nee'?", answer: "ja" },
  { question: "Ben je wel eens vermoord?", answer: "oliebol" },
  {
    question: "Ga je actief het Nederlandschap promoten?",
    answer: "pannekoekenboot",
  },
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const errorImage = document.getElementById("error-image");
const nextButton = document.getElementById("next-button");

// Array met paden naar foutafbeeldingen
const errorImages = [
  "/images/error1.jpg",
  "/images/error2.jpg",
  "/images/error3.jpg",
  "/images/error4.jpg",
  "/images/error5.jpg",
  "/images/error6.jpg",
  "/images/error7.jpg",
  "/images/error8.jpg",
  "/images/error9.jpg",
];

// Willekeurige afbeelding selecteren
function getRandomErrorImage() {
  const randomIndex = Math.floor(Math.random() * errorImages.length);
  return errorImages[randomIndex];
  console.log(getRandomErrorImage(8));
}

// Toon foutafbeelding
function showError() {
  errorImage.src = getRandomErrorImage(); // Update de `src` van de foutafbeelding
  errorImage.style.display = "block";
  setTimeout(() => {
    errorImage.style.display = "none";
  }, 5000);
}

// Vraag laden
function loadQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].question;
  answerInput.value = "";
}

nextButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Je hebt alle vragen voltooid! Het kan 678 dagen duren voor je aanvraag is verwerkt. Wij nemen dan zo spoedig mogelijk contact met u op.",
      );
      if (confirm("Wilt u eerder aan de beurt komen? Druk dan op OK.")) {
        location.reload(); // Vernieuwt de pagina
      }
    }
  } else {
    showError();
  }
});

// Eerste vraag laden bij opstarten
loadQuestion();
