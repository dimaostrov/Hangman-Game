document.onkeyup = function(e){
    game.checkLetter(e.key);
}



var game = {
    tries: 8,
    triedLetters: '',
    possibleAnswers: ['paleo', 'caveman', 'coconut', 'stone', 'bone', 'rock', 'cave art', 'bison', 'mammoth', 'fire'],
    checkLetter: function(e){
        if(this.triedLetters.includes(e)) { prompt('Youve already tried this letter')}
        if(word.includes(e) && !this.triedLetters.includes(e)) { this.triedLetter += e && /* code to reveal the letter */ }
        if(!word.includes(e)) { this.triedLetter += e && this.tries-- && this.checkLeftTries && /* display that the letter is not there */ }
    },  
    pickRandom: function() {
        return this.possibleAnswers[Math.floor(Math.random()*this.possibleAnswers.length)];   
    },
    newWord: () => word = game.pickRandom(),
    checkLeftTries: () => tries == 0 ? prompt('You lose') && this.newWord();

}

var word = game.newWord();