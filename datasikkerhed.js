//forgrenet test____________________________________________
const startKnap = document.getElementById('test-start-knap');
const testForside = document.getElementById('test-forside');
const testContainer = document.getElementById('test');
const testQuestion = document.getElementById('test-question');
const ja = document.getElementById('ja-knap');
const nej = document.getElementById('nej-knap');
const restartTest = document.getElementById('start-forfra-test');

//Test object
const forhøring = {
    sp1: {
        text: 'spørgsmål 1',
        ja: 'sp2j',
        nej: 'sp2n'
    },

    sp2j: {
        text: 'spørgsmål 2.1',
        ja: 'sp3jj',
        nej: 'sp3jn'
    },
    
    sp2n: {
        text: 'spørgsmål 2.2',
        ja: 'sp3nj',
        nej: 'sp3nn'
    },

    sp3jj: {
        text: 'spørgsmål 3.1',
        ja: 'sp4jjj',
        nej: 'sp4jjn'
    },

    sp3jn: {
        text: 'spørgsmål 3.2',
        ja: 'sp4jnj',
        nej: 'sp4jnn'
    },
    
    sp3nj: {
        text: 'spørgsmål 3.3',
        ja: 'sp4njj',
        nej: 'sp4njn'
    },
    
    sp3nn: {
        text: 'spørgsmål 3.4',
        ja: 'sp4nnj',
        nej: 'sp4nnn'
    },
};

//Start Test
startKnap.addEventListener('click', startTest);

function startTest() {
    testForside.style.display = 'none';
    testContainer.style.display = 'flex';
    currentQuestion = 'sp1';
    questionDisplay();
}

let currentQuestion = 'sp1';

//Display spørgsmål funktion
function questionDisplay () {
    let questionObject = forhøring[currentQuestion];
    testQuestion.innerHTML = questionObject.text;
}

//Opdater spørgsmål funktion
function updateQuestion(answer) {
    currentQuestion = forhøring[currentQuestion][answer];
    questionDisplay();
}


ja.addEventListener('click', function () {
    updateQuestion('ja');
});

nej.addEventListener('click', function () {
    updateQuestion('nej')
});

restartTest.addEventListener('click', startTest);