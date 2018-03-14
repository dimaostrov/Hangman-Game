//$('body').on('click', game.checkLetter(e.key.toLowerCase()))

document.onkeyup = function(e){
    game.checkLetter(e.key.toLowerCase());
    
}

var game = {
    
    // Initialize tries, all tried letters, word bank for answers, and the display
    tries: 0,
    triedLetters: [],
    letterDisplay: [],
    possibleAnswers: ['paleo', 'caveman', 'coconut', 'stone', 'bone', 'rock', 'cavepaintings', 'bison', 'mammoth', 'fire'],
    display: document.getElementById('display'),
    triesDisplay: document.getElementById('tries'),
    hangImage: document.getElementById('hang'),
    
    
    
    // function that gets executed each time a user presses a letter, and adds up tries, and calls other functions to change display.
    checkLetter: function(e){
        if(this.triedLetters.includes(e)) { 
            alert('You already tried this letter')
        } else if(word.includes(e) && !this.triedLetters.includes(e)) {  
            this.replaceBlank(e) 
            if (this.letterDisplay == word) {
                alert('you won');
                let ooga = document.getElementById('ooga');
                ooga.currentTime = 0;
                ooga.play()
                game.newWord()
            }
        } else if(!word.includes(e) && e.length == 1 && e.match(/[a-z]/)) { 
            this.triedLetters.push(e)
            this.tries++ 
            this.checkLeftTries()
            this.hangImage.src = `assets/images/${this.tries}.jpeg`
            let wrong = document.getElementById('wrong');
            wrong.currentTime = 0;
            wrong.play()
        }    
        
        
        this.display.innerHTML = this.letterDisplay.join(' ');
        this.triesDisplay.innerHTML = this.triedLetters.join('  ');
    },  
    
    
    // functions that picks a random word, to be called at the beginning and everytime a user wins/losses game
    pickRandom: function() {
        var word = this.possibleAnswers[Math.floor(Math.random()*this.possibleAnswers.length)]; 
        this.letterDisplay = '_'.repeat(word.length).split('');
        this.triedLetters = [];
        this.tries = 0;
        display.innerHTML = this.letterDisplay.join('   ');
        this.triesDisplay.innerHTML = this.triedLetters.join('  ');
        this.hangImage.src = `assets/images/${this.tries}.jpeg`
        return word.split('');  
    },
    newWord: function(){
        word = game.pickRandom()
    },

    // checks hp of user, and will reboot word if the user looses
    checkLeftTries: function() {
        if(this.tries > 5){
            alert('You lose')
            game.newWord()
        }
    },
    
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