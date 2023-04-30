// Quiz questions and answers
const quiz = [
	{
		question: "What is the capital of France?",
		choices: ["Paris", "Berlin", "Rome", "Madrid"],
		answer: 0
	},
	{
		question: "What is the highest mountain in the world?",
		choices: ["K2", "Mount Everest", "Makalu", "Lhotse"],
		answer: 1
	},
	{
		question: "What is the largest country in the world?",
		choices: ["Russia", "China", "Canada", "USA"],
		answer: 0
	},
	{
		question: "What is the largest animal on Earth?",
		choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
		answer: 1
	},
	{
		question: "What is the currency of Japan?",
		choices: ["Dollar", "Yuan", "Yen", "Euro"],
		answer: 2
	}
];

// Quiz variables
let currentQuestion = 0;
let score = 0;

// Quiz elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const progressElement = document.getElementById("progress");

// Set up the quiz
function setUpQuiz() {
	showQuestion();
	showChoices();
	showProgress();
}

// Show the current question
function showQuestion() {
	questionElement.innerHTML = quiz[currentQuestion].question;
}

// Show the current choices
function showChoices() {
	for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
		document.getElementById("choice" + i).innerHTML = quiz[currentQuestion].choices[i];
	}
}

// Show the quiz progress
function showProgress() {
	progressElement.innerHTML = "Question " + (currentQuestion + 1) + " of " + quiz.length;
}

// Check the answer and move to the next question
function checkAnswer(choice) {
	if (choice === quiz[currentQuestion].answer) {
		document.getElementById("choice" + choice).classList.add("correct");
		score++;
	} else {
		document.getElementById("choice" + choice).classList.add("incorrect");
	}
	disableChoices();
	setTimeout(nextQuestion, 1000);
}

// Disable the answer choices after selection
function disableChoices() {
	for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
		document.getElementById("choice" + i).setAttribute("disabled", true);
	}
}

// Enable the answer choices for the next question
function enableChoices() {
	for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
		document.getElementById("choice" + i).removeAttribute("disabled");
		document.getElementById("choice" + i).classList.remove("correct", "incorrect");
	}
}

// Move to the next question
function nextQuestion() {
	if (currentQuestion < quiz.length - 1) {
		currentQuestion++;
		showQuestion();
		showChoices();
		enableChoices();
		showProgress();
	} else {
		endQuiz();
	}
}

// End the quiz and show the final score
function endQuiz() {
	document.getElementById("question").innerHTML = "Quiz Complete!";
	document.getElementById("choices").innerHTML = "Your score is " + score + " out of " + quiz.length;
	document.getElementById("progress").innerHTML = "";
}

// Start the quiz when the page loads
window.onload = setUpQuiz;
