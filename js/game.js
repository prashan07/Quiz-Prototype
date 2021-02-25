const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnaswers = true;
let score = 0;
let questioncounter = 0;
let availableQuestion = [];


let questions = [
    {
        question: 'Which club has won the most Champions League titles?',
        option1: 'Real Madrid',
        option2: 'Liverpool',
        option3: 'Bayern Munich',
        option4: 'Barcelona',
        answer: 'Real Madrid',
    },
    {
        question: 'Which club won the Champions League 2019/20?',
        option1: 'Paris St Germain',
        option2: 'Bayern Munich',
        option3: 'Atletico Madrid',
        option4: 'Manchester City',
        answer: 'Bayern Munich',
    },
    {
        question: 'Which player won the Best UEFA Player Award 2020?',
        option1: 'Lionel Messi',
        option2: 'Joshua Kimmich',
        option3: 'Manuel Neuer',
        option4: 'Robert Lewandowski',
        answer: 'Robert Lewandowski',
    },
    {
        question: 'What was the score between Bayern Munich and Barcelona in 2020?',
        option1: '7-3',
        option2: '3-1',
        option3: '8-2',
        option4: '4-4',
        answer: '8-2',
    },
    {
        question: 'Who is the most decorated German Player?',
        option1: 'Thomas Muller',
        option2: 'Manuel Neuer',
        option3: 'Gerd Muller',
        option4: 'Toni Kroos',
        answer: 'Thomas Muller',
    },
    
];


const SCORE_POINTS = 10;
const MAX_QUESTIONS = 5;

var startgame = function(){
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    getNewQuestion();
}


var getNewQuestion = function(){
    if(availableQuestion.length===0 || questioncounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    questioncounter++;
    progressText.innerText = `Question ${questioncounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questioncounter/MAX_QUESTIONS)*100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionsIndex];
    // console.log(currentQuestion);
    // console.log(currentQuestion.option1);
    question.innerText = currentQuestion.question;
    let number = 1;
    options.forEach(option => {
        // const number = option.dataset['number'];
        // console.log(number);
        option.innerText = currentQuestion['option'+number]
        number++;
    })

    availableQuestion.splice(questionsIndex,1);

    acceptingAnaswers = true;
}

var incrementScore = function(score_points){
    score+=score_points;
    scoreText.innerText = score;
}

options.forEach(option => {
    option.addEventListener('click', function(e){
        if(!acceptingAnaswers) return;

        acceptingAnaswers = false;
        const selectedOption = e.target;
        console.log(selectedOption);
        const selectedAnswer = selectedOption.innerText;
        // console.log(selectedAnswer);

        let classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS);
        }
        selectedOption.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    })
})


startgame();