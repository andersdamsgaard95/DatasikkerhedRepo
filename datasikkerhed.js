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


//Quiz___________________________________________________

//Spørgsmål
const spørgsmål = document.getElementById('quiz-question');

//Svar
const svarMuligheder = document.querySelectorAll('.quiz-svar');

//Feedback
const feedback = document.getElementById('feedback');

//Prøv igen knap
const resetSpørgsmål = document.getElementById('prøv-igen-knap');

//Næste knap
const næsteKnap = document.getElementById('næste-spørgsmål');

//Start helt forfra knap
const totalReset = document.getElementById('restart-quiz');
const totalResetContainer = document.getElementById('total-quiz-reset-container');

const quizForside = document.getElementById('quiz-forside');
const quizContainer = document.getElementById('quiz');
const quizStartKnap = document.getElementById('quiz-start-knap');

quizStartKnap.addEventListener('click', startQuiz);

function startQuiz() {
    quizForside.style.display = 'none';
    quizContainer.style.display = 'flex';
    displayRound(round);
}

//Object for quiz
const quiz = {
    1: {
        spørgsmål: 'Spørgsmål 1',
        svar: ['svar1', 'svar2', 'svar3', 'svar4'],
        rigtigSvar: 'svar1' 
    },

    2: {
        spørgsmål: 'Spørgsmål 2',
        svar: ['svar2.1', 'svar2.2', 'svar2.3', 'svar2.4'],
        rigtigSvar: 'svar2.2'
    },

    3: {
        spørgsmål: 'Spørgsmål 3',
        svar: ['svar3.1', 'svar3.2', 'svar3.3', 'svar3.4'],
        rigtigSvar: 'svar3.3'
    }
}

//Quiz runde funktion
let round = 1 //starter med runde 1
function displayRound(round) {
    
    //display spørgsmål
    spørgsmål.innerHTML = quiz[round].spørgsmål;

    //display svar
    const answers = quiz[round].svar; //answers er min array med svar
    svarMuligheder.forEach(function(element, index) {
        element.innerHTML = answers[index];
    });
}

//Svar funktion
function hvemVilVæreMillionær(event) {
    
    let valgtSvar = event.target.innerHTML;

    rigtigSvar = quiz[round].rigtigSvar;

    if (valgtSvar === rigtigSvar) {
        this.style.backgroundColor = 'green';
        feedback.innerHTML = 'RIGTIGT';
        feedback.style.color = 'green';
        næsteKnap.innerHTML = 'Næste Spørgsmål';
        næsteKnap.addEventListener('click', videre);
    }
    else {
        this.style.backgroundColor = 'red';
        feedback.innerHTML = 'FORKERT';
        feedback.style.color = 'red';
        resetSpørgsmål.innerHTML = 'Prøv igen';
        resetSpørgsmål.addEventListener('click', function() {
            feedback.innerHTML = '';
            resetSpørgsmål.innerHTML = '';
            svarMuligheder.forEach(function(element) {
                element.addEventListener('click', hvemVilVæreMillionær);
                element.style.backgroundColor = '';
            })
        });
    }

    //Fjern eventListener på svar muligheder efter første forsøg
    svarMuligheder.forEach(function(element) {
        element.removeEventListener('click', hvemVilVæreMillionær);
    })
}

//EventListener for svar-knap
svarMuligheder.forEach(function(element) {
    element.addEventListener('click', hvemVilVæreMillionær);
})

//Videre-knap funktion
function videre() {
    round++

    feedback.innerHTML = '';
    næsteKnap.innerHTML = '';
    næsteKnap.removeEventListener('click', videre);

    svarMuligheder.forEach(function(element) {
        element.addEventListener('click', hvemVilVæreMillionær);
        element.style.backgroundColor = '';
    })

    displayRound(round);

    if (round > 1) {
        totalResetContainer.style.display = 'flex';
    }
}



//Total reset knap for quiz
totalReset.addEventListener('click', function() {
    round = 1;
    displayRound(round);
    feedback.innerHTML = '';
    resetSpørgsmål.innerHTML = '';
    svarMuligheder.forEach(function(element) {
        element.addEventListener('click', hvemVilVæreMillionær);
        element.style.backgroundColor = '';
    })
    totalResetContainer.style.display = 'none';
})


//Info section________________________________________________

//info text
const igInfo = document.getElementById('ig-text');
const fbInfo = document.getElementById('fb-text');
const ttInfo = document.getElementById('tt-text');

const someInfo = document.getElementById('some-info');

const instagramKnap = document.getElementById('ig-knap')
const facebookKnap = document.getElementById('fb-knap')
const tiktokKnap = document.getElementById('tt-knap')

//SoMeInfo Objekt
soMeInfoObject = {
    instagram: 'Instagram bla bla bla',
    facebook: 'Facebook bla bla bla',
    tiktok: 'TikTok bla bla bla',
}

function showSoMoInfo(app, className, appInfo) {
    if (someInfo.innerHTML === soMeInfoObject[app]) {
        someInfo.innerHTML = '';
        someInfo.className = '';
        someInfo.style.border = '';
    } else {
        someInfo.innerHTML = soMeInfoObject[app];
        someInfo.className = className;
        someInfo.style.border = 'solid';
    }

    if (app !== igInfo) {
        someInfo.style.color = 'white';
    } else {
        someInfo.style.color = 'black';
    }

    if (window.innerWidth <= 700) {
        if (appInfo.innerHTML === soMeInfoObject[app]) {
            appInfo.style.display = 'none';
            appInfo.innerHTML = '';
        } else {
            appInfo.style.display = 'flex';
            appInfo.innerHTML = soMeInfoObject[app];
        }
    }
}

instagramKnap.addEventListener('click', function() {
    showSoMoInfo('instagram', 'bg-ig-color', igInfo);
});
facebookKnap.addEventListener('click', function() {
    showSoMoInfo('facebook', 'bg-fb-color', fbInfo);
});
tiktokKnap.addEventListener('click', function() {
    showSoMoInfo('tiktok', 'bg-tt-color', ttInfo);
});

//Skjul evt SoMe info hvis skærmen trækkes stor mens det vises
function screenResize () {
    if (window.innerWidth > 700) {
        igInfo.style.display = 'none';
        fbInfo.style.display = 'none';
        ttInfo.style.display = 'none';
    }
}
window.addEventListener('resize', screenResize);

/*TO DO:
"prøv igen" virker ikke ved lille skærm
Lav content
Lav brugertest
*/


