// Simple Quiz Application using JavaScript

// HTML Elements
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Array of Questions
const quizQuestions = [
  {
    question: 'What is the capital of France?',
    answers: {
      a: 'Berlin',
      b: 'Madrid',
      c: 'Paris',
      d: 'Lisbon'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Who wrote \'Hamlet\'?',
    answers: {
      a: 'Mark Twain',
      b: 'William Shakespeare',
      c: 'Leo Tolstoy',
      d: 'George Orwell'
    },
    correctAnswer: 'b'
  },
  {
    question: 'What is the square root of 144?',
    answers: {
      a: '10',
      b: '12',
      c: '14',
      d: '16'
    },
    correctAnswer: 'b'
  }
];

// Display Quiz
function buildQuiz() {
  const output = [];

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type='radio' name='question${questionNumber}' value='${letter}'>
          ${letter}: ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class='question'> ${currentQuestion.question} </div>
      <div class='answers'> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

// Show Results
function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainer.style.color = 'green';
    } else {
      answerContainer.style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length} correct`;
}

// Event Listener
submitButton.addEventListener('click', showResults);

// Initialize Quiz
buildQuiz();
