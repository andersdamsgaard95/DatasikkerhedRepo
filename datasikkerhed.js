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
        text: '1 - Bruger du regelmæssigt sociale medieplatforme?',
        ja: 'sp2j',
        nej: 'sp2n'
    },

    sp2j: {
        text: '2ja - Har du nogensinde gennemgået privatlivsindstillingerne på dine sociale mediekonti?',
        ja: 'sp3jj',
        nej: 'sp3jn'
    },
    
    sp2n: {
        text: '2nej - Deler du ofte personlige oplysninger på sociale medieplatforme?',
        ja: 'sp3nj',
        nej: 'sp3nn'
    },

    sp3jj: {
        text: '3ja - Føler du dig sikker i din forståelse af, hvordan dine data bruges på sociale medieplatforme?',
        ja: 'sp4jjj',
        nej: 'sp4jjn'
    },

    sp3jn: {
        text: '3nej - Ville du være interesseret i at lære mere om, hvordan sociale medieplatforme indsamler og bruger dine data?',
        ja: 'sp4jnj',
        nej: 'sp4jnn'
    },
    
    sp3nj: {
        text: '3ja - Har du overvejet de potentielle risici ved at dele personlige oplysninger online?',
        ja: 'sp4njj',
        nej: 'sp4njn'
    },
    
    sp3nn: {
        text: '3nej - Ved du, hvordan du justerer dine privatlivsindstillinger for at kontrollere, hvem der kan se dine indlæg og oplysninger?',
        ja: 'sp4nnj',
        nej: 'sp4nnn'
    },

    sp4jnj: {
        text: 'Er du klar over de typer af data, som sociale medieplatforme indsamler om dig?',
        ja: 'sp5j',
        nej: 'sp5n'
    },

    sp5j: {
        text: 'Føler du dig komfortabel med mængden af data, som sociale medieplatforme indsamler om dig?',
        ja: 'sp5jj',
        nej: 'sp5jn'
    },

    sp5n: {
        text: 'Har du nogensinde stødt på målrettede reklamer på sociale medier, der føltes invasive eller intrusiv?',
        ja: 'sp5nj',
        nej: 'sp5nn'
    },

    sp4jjj: {
        text: '4ja - Det ser ud til at du har godt styr på dit digitale privatliv.'
    },

    sp4njj: {
        text: '4ja - Det lyder til at du er opmærksom på dit online privatliv.'
    },

    sp4jnn: {
        text: 'I så fald er det vigtigt at du er opmærksom på, at dine data kan bruges på måder, du ikke er fuldt ud klar over.'
    },

    sp4jjn: {
        text: 'Nej... Du bør overveje at lære mere om privatlivsindstillinger og datanavngivning.'
    },

    sp4njn: {
        text: 'Ok... Det er vigtigt at forstå de potentielle konsekvenser af at dele for meget online.'
    },

    sp4nnj: {
        text: 'Fedt! Det lyder til at du aktivt administrerer dit online privatliv.'
    },

    sp4nnn: {
        text: 'Du bør overveje at gennemgå og justere dine privatlivsindstillinger for at beskytte dine personlige oplysninger bedre.'
    },

    sp5jj: {
        text: 'Det tyder på, at du måske har en afbalanceret tilgang til online privatliv.'
    },

    sp5jn: {
        text: 'Ok... Du bør overveje at træffe foranstaltninger for at begrænse mængden af data, du deler online.'
    },

    sp5nj: {
        text: 'Du kan overveje at gennemgå dine privatlivsindstillinger og annoncepræferencer.'
    },

    sp5nn: {
        text: 'Ok... Det er stadig vigtigt at du er opmærksom på, hvordan dine data bruges til målrettet annoncering.'
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

//Display spørgsmål funktion
function questionDisplay () {
    let questionObject = forhøring[currentQuestion];
    testQuestion.innerHTML = questionObject.text;

    //Fjerner Ja og Nej knapper hvis en af de sidste 11 objecter er currentQuestion
    const conclusionsToTest = Object.keys(forhøring).slice(-11);
    if (conclusionsToTest.includes(currentQuestion)) {
        ja.style.display = 'none';
        nej.style.display = 'none';
    } else {
        ja.style.display = 'block';
        nej.style.display = 'block';
    }
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
const svarContainer = document.getElementById('quiz-svar-container');

//Feedback
const feedback = document.getElementById('feedback');

//Prøv igen knap
const resetSpørgsmål = document.getElementById('prøv-igen-knap');

//Næste knap
const næsteKnap = document.getElementById('næste-spørgsmål');

//Start helt forfra knap
const totalReset = document.getElementById('restart-quiz');
const totalResetContainer = document.getElementById('total-quiz-reset-container');

//Spørgsmål tæller
const spørgsmålTæller = document.getElementById('spørgsmål-tæller');

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
        spørgsmål: 'Hvad er formålet med overvågning på sociale medieplatforme som Instagram og Facebook?',
        svar: ['At forbedre brugernes privatliv', 'At fremme anonymitet', 'At overvåge brugernes aktiviteter af forskellige årsager', 'At eliminere sociale medieplatforme helt'],
        rigtigSvar: 'At overvåge brugernes aktiviteter af forskellige årsager' 
    },

    2: {
        spørgsmål: 'Hvordan bidrager algoritmer til overvågning på sociale medieplatforme?',
        svar: ['Ved at sikre fuldstændig anonymitet for brugere', 'Ved at spore brugernes interaktioner og præferencer', 'Ved at forhindre indsamlingen af brugerdata', 'Ved at give personligt indhold uden at analysere brugeradfærd'],
        rigtigSvar: 'Ved at spore brugernes interaktioner og præferencer'
    },

    3: {
        spørgsmål: 'Hvorfor bør brugere være bekymrede for overvågning på sociale medier?',
        svar: ['Fordi det garanterer absolut kontrol over personlige data', 'Fordi det hjælper med at opretholde privatlivsindstillinger automatisk', 'Fordi det rejser spørgsmål om privatliv og digitale rettigheder', 'Fordi det sikrer fuldstændig ytringsfrihed online'],
        rigtigSvar: 'Fordi det rejser spørgsmål om privatliv og digitale rettigheder'
    },

    4: {
        spørgsmål: 'Hvilke skridt kan brugere tage for at beskytte deres privatliv på sociale medieplatforme?',
        svar: ['Ved at dele personlige oplysninger offentligt', 'Ved at bruge svage adgangskoder til deres konti', 'Ved at gennemgå og justere privatlivsindstillinger regelmæssigt', 'Ved at give adgang til deres data til enhver tredjepartsapplikation'],
        rigtigSvar: 'Ved at gennemgå og justere privatlivsindstillinger regelmæssigt'
    },

    5: {
        spørgsmål: 'Hvordan kan opmærksomhed om overvågning på sociale medieplatforme gavne brugere?',
        svar: ['Ved at gøre dem mere sårbare over for online trusler', 'Ved at styrke dem til at træffe informerede beslutninger om deres online tilstedeværelse', 'Ved at begrænse deres interaktioner på sociale medieplatforme', 'Ved at afskrække dem fra at bruge sociale medier helt'],
        rigtigSvar: 'Ved at styrke dem til at træffe informerede beslutninger om deres online tilstedeværelse'
    }
}

//Quiz runde funktion
let round = 1 //starter med runde 1
function displayRound(round) {
    
    if (round > 5) {
        svarContainer.style.display = 'none';
        spørgsmål.innerHTML = 'Tillykke! Du har svaret rigtigt på alle spørgsmål. Skriv dem bag øret.';
        spørgsmålTæller.innerHTML = '';
    } else {
        svarContainer.style.display = 'grid';

         //display spørgsmål
        spørgsmål.innerHTML = quiz[round].spørgsmål;

        //display svar
        const answers = quiz[round].svar; //answers er min array med svar
        svarMuligheder.forEach(function(element, index) {
        element.innerHTML = answers[index];
        });

        //Spørgsmål tæller
        spørgsmålTæller.innerHTML = `Spørgsmål ${round}/5`;
    }

    if (round === 1) {
        totalReset.innerHTML = '';
    } else {
        totalReset.innerHTML = 'Start helt forfra';
    }

    if (round === 5) {
        næsteKnap.innerHTML = 'Videre'
    } else {
        næsteKnap.innerHTML = 'Næste spørgsmål'
    }
}

//Svar funktion
function hvemVilVæreMillionær(event) {
    
    let valgtSvar = event.target.innerHTML;

    rigtigSvar = quiz[round].rigtigSvar;

    if (valgtSvar === rigtigSvar) {
        this.style.backgroundColor = 'green';
        feedback.innerHTML = 'RIGTIGT';
        feedback.style.color = 'green';
        næsteKnap.style.display = 'grid';
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
    svarMuligheder.forEach(function(element) {
        element.removeEventListener('mouseover', function () {
            element.style.scale = '105%';
        });
    })
    svarMuligheder.forEach(function(element) {
        element.removeEventListener('mouseout', function () {
            element.style.scale = '100%';
        });
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
    næsteKnap.style.display = 'none';
    næsteKnap.removeEventListener('click', videre);

    svarMuligheder.forEach(function(element) {
        element.addEventListener('click', hvemVilVæreMillionær);
        element.style.backgroundColor = '';
    })

    displayRound(round);
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
    //totalResetContainer.style.display = 'none';
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
    instagram: 'Instagram, det livlige centrum for visuel fortælling og social forbindelse, er også et rige, hvor overvågning stille opererer under overfladen. Fra det øjeblik du uploader et foto til det øjeblik, du scroller gennem din feed, bliver hver handling omhyggeligt overvåget og analyseret.Bag kulisserne sporer algoritmer dine præferencer, interaktioner og selv de millisekunder, du dvæler ved et opslag. Disse data driver platformens anbefalingssystemer og former det indhold, du ser, samt de reklamer, der fylder din feed. Men overvågning på Instagram strækker sig ud over algoritmer. Menneskelige moderatorer patruljerer flittigt platformen og markerer indhold, der overtræder fællesskabsretningslinjerne eller rejser advarselsflag. Dine opslag, kommentarer og beskeder er underlagt nøje undersøgelse, med potentielle konsekvenser for dem, der anses for at overtræde Instagrams politikker. Mens overvågning på Instagram tjener forskellige formål, lige fra at forbedre brugeroplevelsen til at sikre platformens sikkerhed, rejser det også bekymringer om privatliv og autonomi. Brugere skal navigere i dette digitale landskab med opmærksomhed og forsigtighed og forstå konsekvenserne af deres online handlinger. Ved at kaste lys over Instagrams overvågningspraksis bemyndiger vi brugerne til at træffe informerede beslutninger om deres digitale tilstedeværelse. Lad os sammen navigere gennem kompleksiteten af Instagram-overvågning og arbejde for et mere gennemsigtigt og privatlivsbevidst online miljø.',
    facebook: 'På Facebook, den velkendte sociale platform, er vores digitale aktiviteter under konstant overvågning. Algoritmer og menneskelige moderatorer analyserer hvert opslag, hvert like og hver kommentar. Dette skaber et detaljeret billede af vores digitale adfærd, som bruges til at tilpasse annoncer, indhold og endda manipulere vores handlinger. Overvågning på Facebook strækker sig ud over blot at levere målrettede annoncer. Det handler om at forme vores oplevelse på platformen og endda påvirke vores adfærd uden for den digitale verden. For at beskytte vores privatliv er det afgørende at forstå disse overvågningspraksisser. Vi har ret til at vide, hvordan vores data indsamles, deles og bruges. Ved at øge vores bevidsthed om Facebooks overvågning kan vi træffe informerede valg om vores online-tilstedeværelse og kæmpe for større gennemsigtighed og beskyttelse af vores digitale rettigheder. Sammen kan vi skabe et mere ansvarsfuldt og privatlivsbevidst online-fællesskab, hvor vores rettigheder respekteres, og vores data beskyttes.',
    tiktok: 'I den verden af korte videoindhold og virale tendenser har TikTok fanget opmærksomheden hos millioner verden over. Men underholdningen skjuler lag af overvågningspraksisser, der former vores digitale interaktioner. TikTok-overvågning indebærer systematisk sporing, overvågning og analyse af brugeraktiviteter på platformen. Hver video, vi ser, og profil, vi følger, bidrager til vores digitale fodaftryk, der omhyggeligt undersøges af algoritmer og indholdsmæssige moderatorer. At forstå TikToks overvågning er afgørende for at beskytte privatlivet og digital autonomi. Personlige data indsamles, analyseres og anvendes til målrettet indholds anbefalinger og reklamer, der former vores online oplevelse og potentielt påvirker vores adfærd. Brugere har ret til at vide, hvordan deres data indsamles og bruges. Ved at øge vores bevidsthed om TikToks overvågningsmekanismer kan vi træffe informerede valg om vores online tilstedeværelse og kæmpe for større gennemsigtighed og beskyttelse af vores digitale rettigheder. Sammen kan vi bidrage til at skabe et mere informeret og privatlivsbevidst online fællesskab, hvor vores rettigheder respekteres, og vores data beskyttes.',
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

    if (app === 'instagram') {
        someInfo.style.color = 'black';
    } else {
        someInfo.style.color = 'white';
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
Lav content
Lav brugertest
*/


