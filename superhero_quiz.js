let quizData = [
    {
        question: "What is Superman's arch-enemy?",
        a: "Clark Kent",
        b: "Lois Lane",
        c: "Lex Luthor",
        correctAnswer: "c"
    },
    {
        question: "What is Batman's real name?",
        a: "Barry Allen",
        b: "Bruce Wayne",
        c: "Diana Prince",
        correctAnswer: "b"
    },
    {
        question: "What is the first Green Lanter's of earth?",
        a: "Hal Jordan",
        b: "John Stewart",
        c: "Guy Gardner",
        correctAnswer: "a"
    }
];
// console.log(quizData);
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let answers = document.querySelectorAll('.answer');
let aText = document.getElementById('aText');
let bText = document.getElementById('bText');
let cText = document.getElementById('cText');
let submit = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();
 
function loadQuiz(){
    // upon loadup deselect all answers
    deselectAnswers();

    let currentQuizData = quizData[currentQuiz];
    // console.log(currentQuizData);

    question.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
};

// guide in forEach
// version longcut
// let fruitsA = ["apple", "banana", "mango"];
// fruitsA.forEach(consoleLogFruitsA);
// function consoleLogFruitsA(item, index, array){
//     console.log('index no. = ' + index + " & " + 'item is ' + item);
// }
// version shorthand
// let fruitsB = ["orange", "grapes", "melon"];
// fruitsB.forEach((item, index, arr) => {
//     console.log('index no. = ' + index + " & " + 'item is ' + item);
// });

// deselect all the radio buttons
function deselectAnswers() {
    answers.forEach(answers => answers.checked = false);
};

// forEach answer, if it's checked, answer = answers.id and return it
function selectedAnswer() {
    let answer
    answers.forEach(answers => {
        if(answers.checked) {
            answer = answers.id;
        };
    });
    console.log('player answered = ' + answer);
    return answer;
};

submit.addEventListener('click', function(){
    // answer is equivalent to selected answer
    let answer = selectedAnswer();
    
    if(answer == quizData[currentQuiz].correctAnswer) {
        score++;
        console.log('player score = ' + score);
    }

    currentQuiz++
    console.log('current quiz # = ' +currentQuiz);

    // if currentQuiz begins to be more than quizData lenght, restart the quiz
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = 
        `<div>
            <h1>Your score is ${score}/${quizData.length}</h1>
            <button onclick="location.reload()">Start Again</button>
        </div`;
    };
});

// second option for reload
// let reload = document.getElementById('reload');

// reload.addEventListener('click', function(){
//     location.reload();
// });