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
    const guessNumbers = createNumber();
    const printNumbers = document.getElementById("numbers");
    printNumbers.innerHTML = `${guessNumbers[0]} - ${guessNumbers[1]} - ${guessNumbers[2]} - ${guessNumbers[3]} - ${guessNumbers[4]}`;
    setTimeout(() => printNumbers.innerHTML = "", 3000);

    let score = 0;
    function result () {
        const inputBox = Array.from(document.querySelectorAll("input"));
        for (let i = 0; i < guessNumbers.length; i++) {
            if (guessNumbers.includes(parseInt(inputBox[i].value)))
            score++;
        }
        console.log(guessNumbers)
        console.log(score)
    }

    const check = document.getElementById("check");
    check.addEventListener("click", result);


}



const start = document.getElementById("start");
start.addEventListener("click", play);

