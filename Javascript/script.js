const word = ["never", "you", "that", "bullet", "break"];

let randomWord = "";
let clicked = [];
let result = "";
let nextLos = 0;

function selectWord() {
    randomWord = word[Math.floor(Math.random() * word.length)];
    document.getElementById("letters").addEventListener("click", buttonHandeler);
    window.addEventListener("keydown", keyHandeler);
}

function underScore() {
    let splitedWord = randomWord.split("");
    let mapedWord = splitedWord.map(letter => clicked.indexOf(letter) >= 0 ? letter : "_");
    result = mapedWord.join("");
    document.getElementById("clue").querySelector("p").innerHTML = `${result}`
}

function userWin() {
    if (randomWord === result) {
        document.getElementById("image").querySelector("img").src = "assets/winner.png"
    }
}

function nextLosPicther() {
    document.getElementById("image").querySelector("img").src = `assets/hangman${nextLos}.png`
}

function userLos() {
    if (nextLos === 6) {
        document.getElementById("clue").querySelector("p").innerHTML = `<p>random word is : ${randomWord}</p>`
    }
}

function letterHandeler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomWord.indexOf(letter) >= 0) {
        underScore()
        userWin()
    } else if (randomWord.indexOf(letter) === -1) {
        nextLos++;
        userLos()
        nextLosPicther()
    }
}

function buttonHandeler(event) {
    letterHandeler(event.target.id);
}

function keyHandeler(event) {
    letterHandeler(event.key);
}

selectWord();
underScore()