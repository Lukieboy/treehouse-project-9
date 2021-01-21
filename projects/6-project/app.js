//Variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('phrase');
const startGameBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const realLetter = [];
const ol = document.querySelector('ol');
const phrases = ['hello world', 'coding is fun', 'Good morning', 'how are you', 'What is your name'];

let score = 0;
let missed = 0;

//Start Game Event Listener
startGameBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Function that gets a random phrase from an array
function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor( Math.random() * arr.length-1) + 1;
    const randomPhrase = arr[randomNumber];
    const splitPhrase = randomPhrase.split('');
    console.log(splitPhrase); //Logs the phrase to the console for players who need help
    return splitPhrase;
}
//Function that creates an li element
function createLI(){
    const ul = document.querySelector('#phrase ul');
    const li = document.createElement('li');
    ul.appendChild(li);
    realLetter.push(li);
    return li;
}
//function that adds the phrase to the display
function addPhraseToDisplay(arr){ 
    for(let i = 0; i < arr.length; i++){
        const li = createLI();
        li.textContent = arr[i];
        if(arr[i] !== ' '){
            li.className = 'letter';
        }else{
            li.className = 'space';
        }
    }
}
//Calls the addPhrase To Display function and adds a random phrase from the array phrases
addPhraseToDisplay(getRandomPhraseAsArray(phrases));

//checks it the letter button clicked = the letter clicked then adds the show class to the letter
//if not adds o1 to missed and removes a heart
function checkLetter(button){
    button.disabled = true;
    const letter = document.querySelectorAll('li');
    let letterFound = false;
    for(let i = 0; i<letter.length; i++){
        if(letter[i].textContent.toLowerCase() === button.textContent){
            letter[i].style.transition = '1s ease-in-out';
            letter[i].className = 'show letter';
            letterFound = true;
        }
    }
    
    if (letterFound){
        return true;
    }
    else{
            missed += 1;
            lastOlElement = ol.lastElementChild;
            ol.removeChild(lastOlElement);
    } 
}

//Function that checks if a user has won or lost
function checkWin() {
    const liClassShow = document.querySelectorAll('li.show'); 
    const liClassLetter = document.querySelectorAll('li.letter'); 
    const p = document.createElement('p');
    const a = document.querySelector('a');

    if(missed<5){
        if(liClassLetter.length === liClassShow.length){
            overlay.className = 'win';
            const a = document.querySelector('a');
            score++;
            p.textContent = 'You Win! Click below to play again! Your current score is ' + score;
            overlay.appendChild(p);
            overlay.style.display = 'flex';
            overlay.removeChild(a);
        }
    }else if(missed >= 5){
        overlay.className = 'lose';
        const a = document.querySelector('a');
        p.textContent = 'You Lose! Click below to play again! Your current score is ' + score;
        overlay.appendChild(p);
        overlay.style.display = 'flex';
        overlay.removeChild(a);
    }
}

qwerty.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
        e.target.className = 'chosen';
        checkLetter(e.target);
    }
    checkWin();
});



