const qwerty = document.getElementById('qwerty');
const overlay = document.getElementById('overlay');
const phrase = document.getElementById('phrase');
const letters = document.getElementsByClassName('letter');
const ul = document.getElementsByClassName('gameul')[0];
const startButton = document.querySelector('.start-button');
const lettersShown = document.getElementsByClassName('display');
const heart = document.getElementsByTagName('img');
const svg = document.querySelector('.svg');
const title = document.querySelector('.title');
const overlayTitle = document.querySelector("h2");
let missed = 0;
let reset = false;

let phrases = ['fosfol&iacute;pido', 'transporte celular', 'transporte activo', 'Endocitosis', 'Pinocitosis', '&oacute;smosis', 'Diploide', 'Mitosis', 'Cromosomas', 'Cinetocoro']

var clues = ['componente lip&iacute;dico de la membrana celular', 'capacidad de la membrana de dejar entrar sustancias', 'Tipo de transporte celular que requiere energ&iacute;a', 'Proceso para introducir part&iacute;culas dentro de la c&eacute;lula', 'Proceso mediante el cual la c&eacute;lula ingiere l&iacute;quidos', 'Paso de solvente de un lugar de mayor concentraci&oacute;n a uno de menor', 'Cantidad de cromosomas de las c&eacute;lulas som&aacute;ticas', 'Fase de crecimiento celular y aumento de la cantidad de organelos', 'Proceso de divisi&oacute;n de las c&eacute;lulas som&aacute;ticas de un organismo', 'Estructura filiforme constituida por la cromatina', 'Sitio de adhesi&oacute;n de las fibras del huso mit&oacute;tico']


function getRandomPhraseAsArray(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomString = arr[randomNumber];
    let splitString = randomString.split("");
    document.getElementById("clue").innerHTML = clues[randomNumber];
    return splitString;
}

function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (arr[i] != " ") {
            li.className = "letter gameli";
        } else {
            li.className = "space gameli";
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(btn) {
    let guessed = false;
    for (var i = 0; i < letters.length; i++) {
        if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add("display");
            guessed = true;
        }
    }
    return guessed;
}

function checkWin() {
    if (letters.length === lettersShown.length) {
        reset = true;
        title.innerHTML = "<h2>&iexcl;Ganaste!</h2>";
        startButton.style.display = "block";
        qwerty.style.pointerEvents = "none";
        startButton.innerHTML = "&iexcl;Felicidades! Juega de nuevo";
    } else if (missed === 5) {
        title.innerHTML = "<h2>Perdiste</h2>";
        startButton.style.display = "block";
        qwerty.style.pointerEvents = "none";
        startButton.innerHTML = "Vuelve a intentar";
        reset = true;
    }
}

function resetGame() {
    if (reset === true) {
        missed = 0;
        title.style.display = "none";
        startButton.style.display = "none";
        qwerty.style.pointerEvents = "auto";
        resetHearts();
        changeChosenButtons();
        returnLettersToNormal();
        const phraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
    }
}

function changeChosenButtons() {
    let buttonCheck = document.getElementsByTagName('button');
    for (var i = 0; i < buttonCheck.length; i++) {
        buttonCheck[i].className = "gameButton";
        buttonCheck[i].disabled = false;
    }
}

function returnLettersToNormal() {
    const li = document.querySelectorAll(".letter, .space");
    for (let i = 0; i < li.length; i += 1) {
        ul.removeChild(li[i]);
    }
}

function resetHearts() {
    for (var i = 0; i < heart.length; i++) {
        let newHeart = heart[i];
        newHeart.setAttribute('src', 'https://tabella-games.s3.amazonaws.com/guessWord/img/liveHeart.png');
    }
}

qwerty.addEventListener('click', (event) => {
    let letterFound = checkLetter(event);

    if (event.target.tagName === "BUTTON") {
        event.target.classList = "gameButton chosen";
        event.target.disabled = "true";
        if (letterFound === false && missed < 5) {
            heart[missed].setAttribute('src', 'https://tabella-games.s3.amazonaws.com/guessWord/img/lostHeart.png');
            missed++;
        }
    }
    checkWin();
});

startButton.addEventListener('click', () => {
    if (reset === true && missed === 5) {
        resetGame();
    } else if (reset === true && missed != 5) {
        resetGame();
    }
}); 