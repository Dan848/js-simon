/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Creo 5 numeri casuali tutti diversi e li metto dentro un array
function createNumber () {
    const fiveRandomNumbers = [];
    while (fiveRandomNumbers.length < 5) {
        const randomNumber = getRndInteger(1, 11);
        if (!fiveRandomNumbers.includes(randomNumber)){
        fiveRandomNumbers.push(randomNumber);
        }
    }
    return fiveRandomNumbers;
}

function play () {
    start.removeEventListener("click", play);
    const guessNumbers = createNumber();
    const printNumbers = document.getElementById("numbers");
    printNumbers.innerHTML = `${guessNumbers[0]} - ${guessNumbers[1]} - ${guessNumbers[2]} - ${guessNumbers[3]} - ${guessNumbers[4]}`;
    setTimeout(() => {
    printNumbers.innerHTML = "";
    start.addEventListener("click", play)}, 3000);

    function result () {
        let score = 0;
        const inputBox = Array.from(document.querySelectorAll("input"));
        const checkedNumbers = []
        for (let i = 0; i < guessNumbers.length; i++) {
            if (guessNumbers.includes(parseInt(inputBox[i].value)) && !checkedNumbers.includes(parseInt(inputBox[i].value)))
            score++;
            checkedNumbers.push(parseInt(inputBox[i].value));
        }
        console.log(checkedNumbers)
        console.log(guessNumbers)
        console.log(score)
    }

    const check = document.getElementById("check");
    check.addEventListener("click", result);


}

const start = document.getElementById("start");
start.addEventListener("click", play);

