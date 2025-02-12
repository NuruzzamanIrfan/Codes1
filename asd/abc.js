const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "When is International Mother Language Day observed?",
        answers: {
            a: "January 21",
            b: "February 21",
            c: "March 21",
            d: "April 21"
        },
        correctAnswer: "b"
    },
    {
        question: "Who first announced International Mother Language Day?",
        answers: {
            a: "United Nations",
            b: "UNESCO",
            c: "European Union",
            d: "World Health Organization"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country initiated the idea to celebrate International Mother Language Day?",
        answers: {
            a: "India",
            b: "Pakistan",
            c: "Bangladesh",
            d: "Nepal"
        },
        correctAnswer: "c"
    },
    {
        question: "What event is commemorated on International Mother Language Day in Bangladesh?",
        answers: {
            a: "Independence Day",
            b: "Language Movement of 1952",
            c: "Victory Day",
            d: "Martyrs' Day"
        },
        correctAnswer: "b"
    },
    {
        question: "When did UNESCO formally recognize International Mother Language Day?",
        answers: {
            a: "2000",
            b: "1999",
            c: "2001",
            d: "1998"
        },
        correctAnswer: "b"
    },
    {
        question: "Which language was declared the sole national language of Pakistan in 1948?",
        answers: {
            a: "Bengali",
            b: "English",
            c: "Urdu",
            d: "Hindi"
        },
        correctAnswer: "c"
    },
    {
        question: "Who first raised the demand for Bangla to be one of the national languages of Pakistan?",
        answers: {
            a: "Rafiqul Islam",
            b: "Dhirendranath Datta",
            c: "Syed Muazzem Ali",
            d: "Sheikh Hasina"
        },
        correctAnswer: "b"
    },
    {
        question: "What happened on 21 February 1952 during the Language Movement?",
        answers: {
            a: "The demand for Bangla was accepted",
            b: "Police opened fire on rallies",
            c: "Independence was declared",
            d: "A new constitution was adopted"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the monument built in memory of the language martyrs in Bangladesh?",
        answers: {
            a: "Shaheed Minar",
            b: "Martyrs' Monument",
            c: "Victory Tower",
            d: "Unity Pillar"
        },
        correctAnswer: "a"
    },
    {
        question: "Who suggested the date of 21 February for International Mother Language Day?",
        answers: {
            a: "Abul Barkat",
            b: "Rafiqul Islam",
            c: "Abdul Jabbar",
            d: "Kofi Annan"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // Display the score in an alert box
    alert(`You scored ${numCorrect} out of ${questions.length}`);
}

buildQuiz();

submitButton.addEventListener('click', showResults);