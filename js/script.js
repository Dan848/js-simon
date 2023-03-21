/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da ricordare sono stati ricordati.
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Funzione per aggiungere un array di classi
function addClasses (element, classes) {
    for (const _class of classes) {
        element.classList.toggle(_class);
    }
}

//Funzione per creare un tag HTML, assegnargli un array di classi e stampare al suo interno del testo
function createChild(tagName, classes, text) {
    const newElement = document.createElement(tagName);
    newElement.innerHTML = text;
    addClasses(newElement, classes);
    return newElement;
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

//Funzione per iniziare a giocare
function play () {
    //Prendo gli elementi del DOM
    const inputBoxes = Array.from(document.querySelectorAll("input")); //Input Boxes
    const check = document.getElementById("check"); //Button Check
    const printResult = document.getElementById("result"); //Div per stampare il risultato...
    printResult.innerHTML = ""; //...lo azzero
    //Rimuovo il click 
    start.removeEventListener("click", play);
    const guessNumbers = createNumber();
    const printNumbers = document.getElementById("numbers");
    printNumbers.innerHTML = `${guessNumbers[0]} - ${guessNumbers[1]} - ${guessNumbers[2]} - ${guessNumbers[3]} - ${guessNumbers[4]}`;

    for(let i = 0; i < inputBoxes.length; i++) {
        inputBoxes[i].value = "";
        inputBoxes[i].disabled = true;
    }

    setTimeout(() => {
    for(let i = 0; i < inputBoxes.length; i++) {
        inputBoxes[i].disabled = false;
    }
    printNumbers.innerHTML = "";
    start.addEventListener("click", play);
    check.addEventListener("click", result);
    }, 30000);





    function result () {
        let score = 0;

        const checkedNumbers = []

        for (let i = 0; i < guessNumbers.length; i++) {
            if (guessNumbers.includes(parseInt(inputBoxes[i].value)) && !checkedNumbers.includes(parseInt(inputBoxes[i].value))){
            score++;
            checkedNumbers.push(parseInt(inputBoxes[i].value));
            }
        }

        if (score > 0) {
        printResult.append(createChild("h5", ["bg-warning", "rounded-2", "text-black", "py-2"], `Numeri Ricordati: ${score} - Quali Numeri: ${checkedNumbers}`))
        }
        else {
            printResult.append(createChild("h5", ["bg-danger", "rounded-2", "py-1"], `MALE, HAI RICORDATO ${score} NUMERI`))
        }
        check.removeEventListener("click", result);
    }
}


const start = document.getElementById("start");
start.addEventListener("click", play);

