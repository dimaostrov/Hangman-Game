//$('body').on('click', game.checkLetter(e.key.toLowerCase()))

document.onkeyup = function(e){
    game.checkLetter(e.key.toLowerCase());
    
}



var game = {
    
    // Initialize tries, all tried letters, word bank for answers, and the display
    tries: 8,
    triedLetters: [],
    letterDisplay: [],
    possibleAnswers: ['paleo', 'caveman', 'coconut', 'stone', 'bone', 'rock', 'cave art', 'bison', 'mammoth', 'fire'],
    display: document.getElementById('display'),
    triesDisplay: document.getElementById('tries'),
    
    
    
    // function that gets executed each time a user presses a letter, and adds up tries, and calls other functions to change display.
    checkLetter: function(e){
        if(this.triedLetters.includes(e)) { alert('You already tried this letter')}
        if(word.includes(e) && !this.triedLetters.includes(e)) { this.triedLetters.push(e) && this.replaceBlank(e) }
        if(!word.includes(e)) { this.triedLetters.push(e) && this.tries-- && this.checkLeftTries /* && display that the letter is not there */ }    
        this.display.innerHTML = this.letterDisplay;
        this.triesDisplay.innerHTML = this.tries;
    },  
    
    
    // functions that picks a random word, to be called at the beginning and everytime a user wins/losses game
    pickRandom: function() {
        var word = this.possibleAnswers[Math.floor(Math.random()*this.possibleAnswers.length)]; 
        this.letterDisplay = '_'.repeat(word.length).split('');
        this.triedLetters = [];
        tries = 8;
        display.innerHTML = this.letterDisplay;
        this.triesDisplay.innerHTML = this.tries;
        
        return word.split('');  
    },

    // checks hp of user, and will reboot word if the user looses
    checkLeftTries: () => tries == 0 && prompt('You lose') && this.newWord(),
    
    // function to replace __ in case user gets the letter right
    replaceBlank: (x) => {
        var allChanges = [];
        word.reduce( (a,e,i) => {
            if (e === x) {
                allChanges.push(i);
            }
        }, []);
        allChanges.map((y) => game.letterDisplay[y] = x);
        
    } 
}

var word = game.pickRandom();


 /*
 
 
 
 
 */