// Quiz questions and answers
const quiz = [
{ question: "What is the capital of India?", answer: "delhi" },
{ question: "What programming language is used for web styling?", answer: "css" },
{ question: "Which company created JavaScript?", answer: "netscape" },
{ question: "What keyword declares a constant in JavaScript?", answer: "const" }
];


// Function to run the quiz
function startQuiz() {
let score = 0;


alert("Welcome to the JavaScript Quiz! Click OK to begin.");


for (let i = 0; i < quiz.length; i++) {
let userAnswer = prompt(quiz[i].question);


if (userAnswer === null) {
alert("Quiz cancelled.");
return;
}


userAnswer = userAnswer.toLowerCase().trim();


if (userAnswer === quiz[i].answer) {
alert("Correct!");
score++;
} else {
alert("Incorrect! The correct answer is: " + quiz[i].answer);
}
}


alert("Quiz finished!\nYour final score is: " + score + "/" + quiz.length);
}


startQuiz();