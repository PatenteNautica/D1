// Tutte le domande suddivise per tema
const questions = {
    "Nomenclatura dello scafo": [
        { question: "Com'è denominata la massima lunghezza dell'unità?", answers: ["lunghezza tra le perpendicolari", "lunghezza al galleggiamento", "lunghezza fuori tutto"], correct: 2 },
        { question: "Cosa si intende per asse longitudinale di un'unità?", answers: ["l'asse di rotazione di riferimento per il movimento", "l'asse passante per la prua e la poppa", "l'asse orizzontale compreso tra le due murate"], correct: 1 },
        { question: "Quale funzione svolge la sentina di un'unità?", answers: ["contenere il carburante", "contenere le acque sporche e i residui liquidi", "contenere le acque dolci"], correct: 1 },
        { question: "Le murate sono?", answers: ["la superficie laterale verticale dello scafo", "la struttura che ricopre le cabine", "la paratia divisoria tra la zona motore e la zona passeggeri"], correct: 0 },
        { question: "Cos'è il ponte di coperta?", answers: ["la superficie orizzontale atta a ricoprire la parte superiore dello scafo", "la parte superiore dell'albero", "la paratia tra il motore e la zona di navigazione"], correct: 0 },
        { question: "Cos'è la linea di galleggiamento?", answers: ["la linea che indica il livello dell'acqua rispetto allo scafo", "la linea orizzontale sopra la quale si trova la parte emersa dello scafo", "la linea che divide la parte inferiore dalla parte superiore della nave"], correct: 0 },
        { question: "Cosa significa 'scafo a fondo piatto'?", answers: ["scafo con un fondo orizzontale e privo di curve", "scafo progettato per navigare in acque profonde", "scafo progettato per il trasporto di carichi pesanti"], correct: 0 },
        { question: "Qual è la funzione delle paratie stagni?", answers: ["dividere la nave in compartimenti stagni", "dare supporto al timone", "fornire spazio per il motore"], correct: 0 },
        { question: "Cosa significa 'svuotamento della sentina'?", answers: ["rimozione dell'acqua accumulata sul fondo della nave", "sostituzione dei carburanti", "trattamento dei rifiuti a bordo"], correct: 0 },
        { question: "Quali sono le caratteristiche del ponte di coperta?", answers: ["è la struttura che ricopre l'intera nave", "è la struttura principale a livello superiore", "è il ponte che divide la parte motore dalla zona passeggeri"], correct: 1 },
        // Aggiungere le rimanenti domande
    ],
    "Motore": [
        { question: "Quale funzione svolge il motore?", answers: ["propulsione", "ventilazione", "frenatura"], correct: 0 },
        { question: "Come si spegne normalmente il motore diesel?", answers: ["per interruzione dell'alimentazione di carburante", "per abbassamento della velocità", "per aumento della pressione"], correct: 0 },
        { question: "Qual è il vantaggio principale del motore diesel rispetto ad altri tipi di motori?", answers: ["maggiore efficienza nei consumi", "maggiore velocità", "minor rumore"], correct: 0 },
        { question: "Qual è la principale differenza tra un motore a benzina e uno diesel?", answers: ["il tipo di carburante utilizzato", "la velocità massima", "l'efficienza nei consumi"], correct: 0 },
        { question: "Che tipo di motore viene solitamente utilizzato per le imbarcazioni da diporto?", answers: ["motore a benzina", "motore diesel", "motore elettrico"], correct: 1 },
        { question: "Cos'è la pompa di sentina?", answers: ["un dispositivo che raccoglie e rimuove l'acqua dalle stive", "un dispositivo che regola la pressione del motore", "un componente che alimenta il motore"], correct: 0 },
        { question: "Cosa significa 'avviamento del motore a caldo'?", answers: ["avviare un motore che è stato già in funzione", "avviare un motore freddo", "modificare la temperatura del motore prima dell'avvio"], correct: 0 },
        { question: "Che tipo di motore si utilizza per il raffreddamento dell'acqua di mare?", answers: ["motore a circuito chiuso", "motore a circuito aperto", "motore ibrido"], correct: 1 },
        { question: "Cos'è il 'colpo di gas'?", answers: ["un aumento improvviso della velocità del motore", "una riduzione della velocità del motore", "un aumento della pressione di carburante"], correct: 0 },
        { question: "Cosa indica un'alta temperatura del motore?", answers: ["un possibile guasto nel sistema di raffreddamento", "un aumento di velocità", "un problema con l'olio motore"], correct: 0 },
        // Aggiungere le rimanenti domande
    ],
    "Sicurezza": [
        { question: "Cos'è la sentina?", answers: ["contiene il carburante", "contenere le acque sporche", "contenere le acque dolci"], correct: 1 },
        { question: "Qual è la funzione della zavorra?", answers: ["stabilizzare l'unità", "rendere il motore più efficiente", "abbassare il centro di gravità"], correct: 0 },
        { question: "Che cosa è il galleggiamento?", answers: ["la capacità di un'unità di rimanere a galla sull'acqua", "la capacità di spostare una grande quantità d'acqua", "la velocità dell'unità sull'acqua"], correct: 0 },
        { question: "Qual è la funzione delle zattere di salvataggio?", answers: ["fornire rifugio temporaneo", "fornire carburante", "recuperare i rifiuti"], correct: 0 },
        { question: "In caso di incendio a bordo, quale è la priorità?", answers: ["evacuare l'equipaggio", "spegnere il fuoco", "minimizzare i danni"], correct: 1 },
        { question: "Quando è necessario utilizzare il giubbotto salvagente?", answers: ["quando si è sopra bordo", "quando si è in navigazione a bassa velocità", "sempre durante la navigazione"], correct: 0 },
        { question: "Cos'è un sistema di allarme di emergenza?", answers: ["un sistema che segnala situazioni di pericolo a bordo", "un dispositivo che accende le luci", "un dispositivo che avvisa quando la nave è in ritardo"], correct: 0 },
        { question: "Cos'è un razzo di segnalazione?", answers: ["un dispositivo per segnalare la posizione della nave in caso di emergenza", "un dispositivo per generare fumo", "un razzo di segnalazione acustica"], correct: 0 },
        { question: "Qual è la durata minima del giubbotto salvagente?", answers: ["2 ore", "4 ore", "6 ore"], correct: 1 },
        { question: "Che tipo di attrezzatura di emergenza deve essere sempre presente a bordo?", answers: ["giubbotti salvagente", "paracaduti", "attrezzatura per il fuoco"], correct: 0 },
        // Aggiungere le rimanenti domande
    ],
    "Manovre e condotta": [
        { question: "Cos'è la virata?", answers: ["un cambiamento di direzione di 180 gradi", "un cambiamento di direzione lungo una curva", "un movimento in linea retta"], correct: 1 },
        { question: "Cosa significa il termine 'uscire di prua'?", answers: ["girare l'unità verso destra", "girare l'unità verso sinistra", "avanzare con la prua prima di poppa"], correct: 2 },
        { question: "Qual è la direzione della corrente favorevole?", answers: ["nella stessa direzione della navigazione", "opposta alla direzione della navigazione", "perpendicolare alla direzione della navigazione"], correct: 0 },
        { question: "Qual è la manovra per fermare un'unità in movimento?", answers: ["ridurre la velocità", "mettere il motore a folle", "riavviare il motore"], correct: 1 },
        { question: "Come si effettua una retromarcia?", answers: ["invertendo la direzione del motore", "accelerando", "utilizzando il timone"], correct: 0 },
        { question: "Come si gestisce la velocità in acque ristrette?", answers: ["riducendo la velocità", "aumentando la velocità", "disattivando il timone"], correct: 0 },
        // Aggiungere le rimanenti domande
    ],
    // Aggiungere tutte le altre domande per i temi restanti
};

// Logica per estrarre 15 domande casuali
const questionDistribution = {
    "Nomenclatura dello scafo": 1,
    "Motore": 2,
    "Sicurezza": 3,
    "Manovre e condotta": 3,
    "COLREG e Segnalamento Marittimo": 2,
    "Meteorologia": 1,
    "Navigazione": 1,
    "Normativa diportistica e ambientale": 3
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
    // Estraiamo le domande in base alla distribuzione specificata
    Object.keys(questionDistribution).forEach(theme => {
        const themeQuestions = questions[theme];
        const numQuestions = questionDistribution[theme];
        
        // Estrai il numero di domande richieste per ciascun tema
        for (let i = 0; i < numQuestions; i++) {
            const randomQuestion = themeQuestions[Math.floor(Math.random() * themeQuestions.length)];
            selectedQuestions.push(randomQuestion);
        }
    });

    // Mischiamo le domande selezionate
    return selectedQuestions.sort(() => Math.random() - 0.5);
}

function displayQuestions() {
    const examForm = document.getElementById('examForm');
    const questionsToDisplay = getRandomQuestions();

    questionsToDisplay.forEach((q, index) => {
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
