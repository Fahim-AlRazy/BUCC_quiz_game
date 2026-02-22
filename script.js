// DOM Elements
const startScreen = document.getElementById("start-screen");
const subjectScreen = document.getElementById("subject-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const abortButton = document.getElementById("abort-btn");
const timerSpan = document.getElementById("timer");
const timerDisplay = document.getElementById("timer-display");
const subjectButtons = document.querySelectorAll(".subject-btn");
const subjectAbortButton = document.getElementById("subject-abort-btn");
const topLogo = document.getElementById("top-logo");
const bottomLogo = document.getElementById("bottom-logo");
const eventText = document.getElementById("event-text");
const topSection = document.getElementById("top-section");

const subjects = {
  java: [
    {
      question: "Which of the following is a VALID variable name in Java?",
      answers: [
        { text: "1stValue", correct: false },
        { text: "first name", correct: false },
        { text: "_firstValue", correct: true },
        { text: "first-Value", correct: false },
      ],
    },
    {
      question: "What is the output of the following code?\nint x = 5;\nx = 10;\nSystem.out.println(x);",
      answers: [
        { text: "5", correct: false },
        { text: "10", correct: true },
        { text: "15", correct: false },
        { text: "Error", correct: false },
      ],
    },
    {
      question: "In a flowchart, which shape represents a process (like a calculation or assignment)?",
      answers: [
        { text: "Oval", correct: false },
        { text: "Diamond", correct: false },
        { text: "Parallelogram", correct: false },
        { text: "Rectangle", correct: true },
      ],
    },
    {
      question: "What is the result of 15 % 4 in Java?",
      answers: [
        { text: "3.75", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false },
        { text: "0", correct: false },
      ],
    },
    {
      question: "Which data type is best for storing a single character like 'A'?",
      answers: [
        { text: "String", correct: false },
        { text: "char", correct: true },
        { text: "int", correct: false },
        { text: "Float", correct: false },
      ],
    },
    {
      question: "What will System.out.println(10 / 4); print?",
      answers: [
        { text: "2.5", correct: false },
        { text: "2.0", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
      ],
    },
    {
      question: "Which operator is used to compare if two values are equal?",
      answers: [
        { text: "=", correct: false },
        { text: "==", correct: true },
        { text: "equals", correct: false },
        { text: "!=", correct: false },
      ],
    },
    {
      question: "In a flowchart, what does the Parallelogram shape represent?",
      answers: [
        { text: "Start/End", correct: false },
        { text: "Decision", correct: false },
        { text: "Input/Output", correct: true },
        { text: "Process", correct: false },
      ],
    },
    {
      question: 'What is the correct way to declare an integer variable named "age" with a value of 20?',
      answers: [
        { text: "age = 20;", correct: false },
        { text: "int age = 20", correct: false },
        { text: "int age = 20;", correct: true },
        { text: "integer age = 20;", correct: false },
      ],
    },
    {
      question: "Which method is used to read an entire line of text including spaces from the user?",
      answers: [
        { text: "next()", correct: false },
        { text: "nextInt()", correct: false },
        { text: "nextLine()", correct: true },
        { text: "read()", correct: false },
      ],
    },
    {
      question: 'What is the output of System.out.print("Hello "); System.out.println("World");?',
      answers: [
        { text: "Hello\\nWorld", correct: false },
        { text: "HelloWorld", correct: false },
        { text: "Hello World", correct: true },
        { text: "World Hello", correct: false },
      ],
    },
    {
      question: "Which symbol is used for a single-line comment in Java?",
      answers: [
        { text: "/*", correct: false },
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "--", correct: false },
      ],
    },
    {
      question: "What happens to x after x += 5; if x was originally 10?",
      answers: [
        { text: "x becomes 5", correct: false },
        { text: "x becomes 15", correct: true },
        { text: "x becomes 50", correct: false },
        { text: "x stays 10", correct: false },
      ],
    },
    {
      question: 'What is the output of System.out.println("Java" + 8 + 2);?',
      answers: [
        { text: "Java10", correct: false },
        { text: "Java82", correct: true },
        { text: "Java 8 2", correct: false },
        { text: "Error", correct: false },
      ],
    },
    {
      question: "Every Java program must have a method named:",
      answers: [
        { text: "start()", correct: false },
        { text: "begin()", correct: false },
        { text: "main()", correct: true },
        { text: "execute()", correct: false },
      ],
    },
    {
      question: 'Which of these is a "Logical AND" operator?',
      answers: [
        { text: "&", correct: false },
        { text: "||", correct: false },
        { text: "&&", correct: true },
        { text: "!", correct: false },
      ],
    },
    {
      question: "If you use Scanner sc = new Scanner(System.in);, which package must you import?",
      answers: [
        { text: "java.lang.*", correct: false },
        { text: "java.io.*", correct: false },
        { text: "java.util.Scanner", correct: true },
        { text: "java.net.Scanner", correct: false },
      ],
    },
    {
      question: 'What is the output of System.out.println(10 + 20 + " is the sum");?',
      answers: [
        { text: "1020 is the sum", correct: false },
        { text: "30 is the sum", correct: true },
        { text: "30is the sum", correct: false },
        { text: "Error", correct: false },
      ],
    },
    {
      question: "Which shape indicates the Start or End of a program in a flowchart?",
      answers: [
        { text: "Circle", correct: false },
        { text: "Rectangle", correct: false },
        { text: "Oval/Terminator", correct: true },
        { text: "Diamond", correct: false },
      ],
    },
    {
      question: "What is the value of y after this code: int x = 10; int y = ++x;?",
      answers: [
        { text: "10", correct: false },
        { text: "11", correct: true },
        { text: "9", correct: false },
        { text: "12", correct: false },
      ],
    },
  ],
  gk: [
    {
      question: "Which international organization, founded in 1945, is headquartered in New York City?",
      answers: [
        { text: "World Bank", correct: false },
        { text: "United Nations", correct: true },
        { text: "NATO", correct: false },
        { text: "European Union", correct: false },
      ],
    },
    {
      question: 'Who is known as the "Father of the Constitution" in the United States?',
      answers: [
        { text: "Thomas Jefferson", correct: false },
        { text: "George Washington", correct: false },
        { text: "James Madison", correct: true },
        { text: "Benjamin Franklin", correct: false },
      ],
    },
    {
      question: 'Which country is known as the "Land of the Rising Sun"?',
      answers: [
        { text: "China", correct: false },
        { text: "Thailand", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "In which year did the First World War begin?",
      answers: [
        { text: "1912", correct: false },
        { text: "1914", correct: true },
        { text: "1918", correct: false },
        { text: "1939", correct: false },
      ],
    },
    {
      question: "Which city is currently the capital of France?",
      answers: [
        { text: "Lyon", correct: false },
        { text: "Marseille", correct: false },
        { text: "Paris", correct: true },
        { text: "Bordeaux", correct: false },
      ],
    },
    {
      question: 'Who painted the "Mona Lisa"?',
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      question: "What is the currency used in Japan?",
      answers: [
        { text: "Won", correct: false },
        { text: "Yen", correct: true },
        { text: "Yuan", correct: false },
        { text: "Ringgit", correct: false },
      ],
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Africa", correct: true },
        { text: "Australia", correct: false },
        { text: "South America", correct: false },
      ],
    },
    {
      question: "Who was the first person to step on the moon?",
      answers: [
        { text: "Buzz Aldrin", correct: false },
        { text: "Yuri Gagarin", correct: false },
        { text: "Neil Armstrong", correct: true },
        { text: "Elon Musk", correct: false },
      ],
    },
    {
      question: "Which of these is NOT a primary color in the additive (light) color model?",
      answers: [
        { text: "Red", correct: false },
        { text: "Green", correct: false },
        { text: "Blue", correct: false },
        { text: "Yellow", correct: true },
      ],
    },
    {
      question: "What is the smallest country in the world by land area?",
      answers: [
        { text: "Monaco", correct: false },
        { text: "Maldives", correct: false },
        { text: "Vatican City", correct: true },
        { text: "Singapore", correct: false },
      ],
    },
    {
      question: "Which language has the most native speakers in the world?",
      answers: [
        { text: "English", correct: false },
        { text: "Spanish", correct: false },
        { text: "Mandarin Chinese", correct: true },
        { text: "Hindi", correct: false },
      ],
    },
    {
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon River", correct: false },
        { text: "Nile River", correct: true },
        { text: "Yangtze River", correct: false },
        { text: "Mississippi River", correct: false },
      ],
    },
    {
      question: "In which country did the Industrial Revolution begin?",
      answers: [
        { text: "Germany", correct: false },
        { text: "USA", correct: false },
        { text: "Great Britain", correct: true },
        { text: "France", correct: false },
      ],
    },
    {
      question: 'Which of these is a "Great Lake" located in North America?',
      answers: [
        { text: "Lake Victoria", correct: false },
        { text: "Lake Baikal", correct: false },
        { text: "Lake Superior", correct: true },
        { text: "Lake Caspian", correct: false },
      ],
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
      ],
    },
    {
      question: "What is the capital of Australia?",
      answers: [
        { text: "Sydney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Canberra", correct: true },
        { text: "Perth", correct: false },
      ],
    },
    {
      question: "Which award is given annually for outstanding achievements in physics, chemistry, medicine, literature, and peace?",
      answers: [
        { text: "Oscar", correct: false },
        { text: "Pulitzer Prize", correct: false },
        { text: "Nobel Prize", correct: true },
        { text: "Golden Globe", correct: false },
      ],
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
  ],
  math: [
    {
      question: "What is the value of x if 2x + 7 = 15?",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "8", correct: false },
        { text: "11", correct: false },
      ],
    },
    {
      question: "What is the square root of 144?",
      answers: [
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false },
        { text: "16", correct: false },
      ],
    },
    {
      question: "What is the area of a triangle with a base of 10cm and a height of 5cm?",
      answers: [
        { text: "50 cm²", correct: false },
        { text: "25 cm²", correct: true },
        { text: "15 cm²", correct: false },
        { text: "100 cm²", correct: false },
      ],
    },
    {
      question: "Solve for y: y² = 49.",
      answers: [
        { text: "7 only", correct: false },
        { text: "-7 only", correct: false },
        { text: "7 and -7", correct: true },
        { text: "49 and 1", correct: false },
      ],
    },
    {
      question: "What is the value of π (Pi) approximately?",
      answers: [
        { text: "2.14", correct: false },
        { text: "3.14", correct: true },
        { text: "3.41", correct: false },
        { text: "4.13", correct: false },
      ],
    },
    {
      question: "If a circle has a radius of 7, what is its circumference? (Use 22/7 for π)",
      answers: [
        { text: "22", correct: false },
        { text: "44", correct: true },
        { text: "154", correct: false },
        { text: "49", correct: false },
      ],
    },
    {
      question: "What is 25% of 200?",
      answers: [
        { text: "25", correct: false },
        { text: "40", correct: false },
        { text: "50", correct: true },
        { text: "75", correct: false },
      ],
    },
    {
      question: "Which of these is a prime number?",
      answers: [
        { text: "9", correct: false },
        { text: "15", correct: false },
        { text: "21", correct: false },
        { text: "17", correct: true },
      ],
    },
    {
      question: "What is the slope of a horizontal line?",
      answers: [
        { text: "1", correct: false },
        { text: "0", correct: true },
        { text: "Undefined", correct: false },
        { text: "-1", correct: false },
      ],
    },
    {
      question: "In a right-angled triangle, if the sides are 3 and 4, what is the hypotenuse?",
      answers: [
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
        { text: "12", correct: false },
      ],
    },
    {
      question: "What is 10³?",
      answers: [
        { text: "100", correct: false },
        { text: "1,000", correct: true },
        { text: "10,000", correct: false },
        { text: "30", correct: false },
      ],
    },
    {
      question: "What is the sum of angles in a quadrilateral?",
      answers: [
        { text: "180°", correct: false },
        { text: "270°", correct: false },
        { text: "360°", correct: true },
        { text: "540°", correct: false },
      ],
    },
    {
      question: "If f(x) = 3x - 2, what is f(4)?",
      answers: [
        { text: "10", correct: true },
        { text: "12", correct: false },
        { text: "14", correct: false },
        { text: "8", correct: false },
      ],
    },
    {
      question: "What is the median of the set: {2, 4, 7, 10, 12}?",
      answers: [
        { text: "4", correct: false },
        { text: "7", correct: true },
        { text: "35", correct: false },
        { text: "6", correct: false },
      ],
    },
    {
      question: "What is the value of x⁰ (where x ≠ 0)?",
      answers: [
        { text: "0", correct: false },
        { text: "x", correct: false },
        { text: "1", correct: true },
        { text: "Infinity", correct: false },
      ],
    },
    {
      question: 'Which of the following is a "proper fraction"?',
      answers: [
        { text: "5/4", correct: false },
        { text: "3/2", correct: false },
        { text: "1/2", correct: true },
        { text: "4/4", correct: false },
      ],
    },
    {
      question: "What is the result of (-5) × (-4)?",
      answers: [
        { text: "-20", correct: false },
        { text: "20", correct: true },
        { text: "-9", correct: false },
        { text: "1", correct: false },
      ],
    },
    {
      question: "How many sides does a Hexagon have?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false },
      ],
    },
    {
      question: "What is the derivative of a constant (like 5)?",
      answers: [
        { text: "5", correct: false },
        { text: "1", correct: false },
        { text: "0", correct: true },
        { text: "x", correct: false },
      ],
    },
    {
      question: "If a die is rolled, what is the probability of getting a 4?",
      answers: [
        { text: "1/4", correct: false },
        { text: "1/2", correct: false },
        { text: "1/6", correct: true },
        { text: "4/6", correct: false },
      ],
    },
  ],
  science: [
    {
      question: "What is the chemical symbol for Gold?",
      answers: [
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Au", correct: true },
        { text: "Gd", correct: false },
      ],
    },
    {
      question: 'Which part of the cell is known as the "Powerhouse"?',
      answers: [
        { text: "Nucleus", correct: false },
        { text: "Ribosome", correct: false },
        { text: "Mitochondria", correct: true },
        { text: "Cell Wall", correct: false },
      ],
    },
    {
      question: "What is the boiling point of water at standard sea level?",
      answers: [
        { text: "90°C", correct: false },
        { text: "100°C", correct: true },
        { text: "110°C", correct: false },
        { text: "120°C", correct: false },
      ],
    },
    {
      question: "Which gas do plants primarily absorb during photosynthesis?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      question: "What is the closest planet to the Sun?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mercury", correct: true },
        { text: "Earth", correct: false },
        { text: "Mars", correct: false },
      ],
    },
    {
      question: "Which vitamin is primarily obtained from sunlight?",
      answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin B12", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin D", correct: true },
      ],
    },
    {
      question: "What is the most abundant gas in the Earth's atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: false },
        { text: "Nitrogen", correct: true },
        { text: "Argon", correct: false },
      ],
    },
    {
      question: 'Which Newton\'s Law states: "For every action, there is an equal and opposite reaction"?',
      answers: [
        { text: "First Law", correct: false },
        { text: "Second Law", correct: false },
        { text: "Third Law", correct: true },
        { text: "Law of Gravitation", correct: false },
      ],
    },
    {
      question: "What is the chemical formula for table salt?",
      answers: [
        { text: "H₂O", correct: false },
        { text: "NaCl", correct: true },
        { text: "CO₂", correct: false },
        { text: "HCl", correct: false },
      ],
    },
    {
      question: "Which human organ is responsible for pumping blood throughout the body?",
      answers: [
        { text: "Lungs", correct: false },
        { text: "Brain", correct: false },
        { text: "Heart", correct: true },
        { text: "Liver", correct: false },
      ],
    },
    {
      question: "What is the center of an atom called?",
      answers: [
        { text: "Electron", correct: false },
        { text: "Proton", correct: false },
        { text: "Nucleus", correct: true },
        { text: "Orbit", correct: false },
      ],
    },
    {
      question: "Sound cannot travel through which of the following?",
      answers: [
        { text: "Water", correct: false },
        { text: "Air", correct: false },
        { text: "Steel", correct: false },
        { text: "Vacuum", correct: true },
      ],
    },
    {
      question: "What is the study of living organisms called?",
      answers: [
        { text: "Physics", correct: false },
        { text: "Chemistry", correct: false },
        { text: "Biology", correct: true },
        { text: "Geology", correct: false },
      ],
    },
    {
      question: "Which planet is famous for its prominent rings?",
      answers: [
        { text: "Jupiter", correct: false },
        { text: "Neptune", correct: false },
        { text: "Saturn", correct: true },
        { text: "Uranus", correct: false },
      ],
    },
    {
      question: "What is the pH value of pure water?",
      answers: [
        { text: "5", correct: false },
        { text: "7", correct: true },
        { text: "9", correct: false },
        { text: "14", correct: false },
      ],
    },
    {
      question: "Who developed the Theory of General Relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Stephen Hawking", correct: false },
        { text: "Marie Curie", correct: false },
      ],
    },
    {
      question: "What is the process by which a liquid turns into a gas at its surface?",
      answers: [
        { text: "Condensation", correct: false },
        { text: "Sublimation", correct: false },
        { text: "Evaporation", correct: true },
        { text: "Melting", correct: false },
      ],
    },
    {
      question: 'Which blood type is known as the "Universal Donor"?',
      answers: [
        { text: "A+", correct: false },
        { text: "B-", correct: false },
        { text: "AB+", correct: false },
        { text: "O-", correct: true },
      ],
    },
    {
      question: "What does DNA stand for?",
      answers: [
        { text: "Deoxyribonucleic Acid", correct: true },
        { text: "Ribonucleic Acid", correct: false },
        { text: "Deoxyribose Nucleus", correct: false },
        { text: "Digital Neural Array", correct: false },
      ],
    },
    {
      question: "Which metal is liquid at room temperature?",
      answers: [
        { text: "Iron", correct: false },
        { text: "Mercury", correct: true },
        { text: "Aluminum", correct: false },
        { text: "Copper", correct: false },
      ],
    },
  ],
};

const quizLength = 5;

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let selectedQuestions = [];
let timeLeft = 60;
let timerInterval = null;
let activeQuestions = [];

totalQuestionsSpan.textContent = quizLength;
maxScoreSpan.textContent = quizLength;

// event listeners
startButton.addEventListener("click", showSubjects);
restartButton.addEventListener("click", restartQuiz);
abortButton.addEventListener("click", abortQuiz);
subjectButtons.forEach((btn) => {
  btn.addEventListener("click", () => startQuiz(btn.dataset.subject));
});
subjectAbortButton.addEventListener("click", () => {
  subjectScreen.classList.remove("active");
  startScreen.classList.add("active");
  topSection.classList.add("visible");
  topLogo.classList.add("visible");
  bottomLogo.classList.add("visible");
  eventText.classList.add("visible");
});

function showSubjects() {
  startScreen.classList.remove("active");
  subjectScreen.classList.add("active");
  topSection.classList.remove("visible");
  topLogo.classList.remove("visible");
  bottomLogo.classList.remove("visible");
  eventText.classList.remove("visible");
}

function startQuiz(subject) {
  activeQuestions = subjects[subject] || [];

  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  const shuffled = [...activeQuestions].sort(() => Math.random() - 0.5);
  selectedQuestions = shuffled.slice(0, quizLength);

  subjectScreen.classList.remove("active");
  quizScreen.classList.add("active");
  timerDisplay.classList.add("visible");

  startTimer();
  showQuestion();
}

function startTimer() {
  timeLeft = 30;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      stopTimer();
      showResults();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerSpan.textContent = minutes + ":" + String(seconds).padStart(2, "0");
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizLength) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizLength) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  stopTimer();
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  timerDisplay.classList.remove("visible");
  topSection.classList.add("visible");
  topLogo.classList.add("visible");
  bottomLogo.classList.add("visible");
  eventText.classList.add("visible");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizLength) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
  topSection.classList.add("visible");
  topLogo.classList.add("visible");
  bottomLogo.classList.add("visible");
  eventText.classList.add("visible");
}

function abortQuiz() {
  stopTimer();
  quizScreen.classList.remove("active");
  startScreen.classList.add("active");
  timerDisplay.classList.remove("visible");
  topSection.classList.add("visible");
  topLogo.classList.add("visible");
  bottomLogo.classList.add("visible");
  eventText.classList.add("visible");
}
