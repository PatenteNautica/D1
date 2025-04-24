
// Domande organizzate per tema
const questions = {
    "Nomenclatura dello scafo": [
        { question: "Com'è denominata la massima lunghezza dell'unità?", answers: ["lunghezza tra le perpendicolari", "lunghezza al galleggiamento", "lunghezza fuori tutto"], correct: 2 },
        // altre domande relative a questo tema
    ],
    "Motore": [
        { question: "Quale funzione svolge il motore?", answers: ["propulsione", "ventilazione", "frenatura"], correct: 0 },
        // altre domande relative a questo tema
    ],
    "Sicurezza": [
        { question: "Cos'è la sentina?", answers: ["contiene il carburante", "contenere le acque sporche", "contenere le acque dolci"], correct: 1 },
        // altre domande relative a questo tema
    ],
    // altre categorie di domande come manovre, meteorologia, ecc.
};

let selectedQuestions = [];
let timer;

function startTimer() {
    let timeLeft = 30 * 60; // 30 minuti in secondi
    timer = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Tempo scaduto!");
        }
        timeLeft--;
    }, 1000);
}

function getRandomQuestions() {
    const themes = Object.keys(questions);
    const selected = [];
    
    // Seleziona domande in modo casuale per ogni tema
    themes.forEach(theme => {
        const themeQuestions = questions[theme];
        for (let i = 0; i < themeQuestions.length; i++) {
            selected.push({ theme, ...themeQuestions[i] });
        }
    });

    // Mischia le domande
    return selected.sort(() => Math.random() - 0.5).slice(0, 15);
}

function displayQuestions() {
    const examForm = document.getElementById('examForm');
    selectedQuestions = getRandomQuestions();

    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;

        const answerList = document.createElement('div');
        q.answers.forEach((answer, i) => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${i}">
                ${answer}
            `;
            answerList.appendChild(label);
        });

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(answerList);
        examForm.appendChild(questionDiv);
    });
}

function checkAnswers() {
    let score = 0;
    selectedQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
            score++;
        }
    });
    alert(`Hai risposto correttamente a ${score} su 15 domande.`);
}

// Carica le domande e avvia il timer
window.onload = function() {
    displayQuestions();
    startTimer();

    document.getElementById('submitBtn').addEventListener('click', checkAnswers);
};
