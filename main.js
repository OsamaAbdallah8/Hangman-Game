let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let letterArray = Array.from(letters)

let conLetters = document.querySelector(".letters")

letterArray.forEach(lett => {

    let span = document.createElement("span")

    span.className = "text-letter"

    let tNode = document.createTextNode(lett)

    span.appendChild(tNode)

    conLetters.appendChild(span)
});

let word = {
    Programming : ["JavaScript" , "CSS" , "HTML" , "python" , "Go" ,"PHP" , "Java"],
    Countries : ["Palestine","Qatar" ,"iraq" ,"Canada" ,"Japan"],
    Animals : ["Lion", "Tiger", "Elephant", "Cat", "Dog", "Monkey"],
    Fruits : ["Apple", "Banana", "Orange", "Mango"]
}

let lKeys = Object.keys(word)

let keysOfNumber = Math.floor(Math.random() * lKeys.length)

let keysOfName = lKeys[keysOfNumber]

let keysOfValue = word[keysOfName]

let proNumber = Math.floor(Math.random() * keysOfValue.length)

let proValue = keysOfValue[proNumber]

document.querySelector(".game-info .category span").innerHTML = keysOfName 

let guess = document.querySelector(".letters-guess")

let guessArray = Array.from(proValue)

guessArray.forEach(letter => {

    let creatSpan = document.createElement("span")

    if (letter === " ") {
        
        creatSpan.className = "has-space"

    }

    guess.appendChild(creatSpan)
})

let guessWord = document.querySelectorAll(".letters-guess span")

let wrongAttemp = 0;

let theDraw = document.querySelector(".hangman-draw")

document.addEventListener("click",(e) => {

    let theStatus = false

    if (e.target.className === "text-letter") {
        
        e.target.classList.add("clicked")

        let selLetter = e.target.innerHTML.toLowerCase()

        let wordChose = Array.from(proValue.toLowerCase())

        wordChose.forEach((wordLet , wordIndex) => {

            if (selLetter === wordLet) {

            theStatus = true;

            guessWord[wordIndex].innerHTML = selLetter;

            checkWin()
        }
    });
        
    if (theStatus !== true) {
            
            wrongAttemp++;

            theDraw.classList.add(`wrong-${wrongAttemp}`)

            document.querySelector("#fail").play()

            if (wrongAttemp === 8) {
                
                conLetters.classList.add("finished")

                endGame()
            }
        }else{
        document.querySelector("#success").play()
        }
    } 
    function endGame() {
        
        let div = document.createElement("div")

        div.className ="pup"

        div.innerHTML =`Game Over, The Word is <span class = "font"> ${proValue} </span>` 

        document.body.appendChild(div)

    }
    function checkWin() {
        let filled = true;

        guessWord.forEach(span => {
            if (span.innerHTML === "" && !span.classList.contains("has-space")) {
                filled = false;
            }
        });

        if (filled) {
            conLetters.classList.add("finished");

            let divN = document.createElement("div");
            divN.className = "sec";
            divN.innerHTML = "🎉 Congratulations! You solved the word! 🎉";

            document.body.appendChild(divN);
        }
    }


})