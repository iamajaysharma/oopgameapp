/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor()
     {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     /**
      *@return {array} from a bunch of array to display on the screen  
      */
     createPhrases()
     {
         const phrases =[
             new Phrase("Let there be love"),
             new Phrase("May the force be with you"),
             new Phrase("How are you"),
             new Phrase("Coding is fun"),
             new Phrase("you are talking to me")
         ];
         return phrases;
     }

    /**
     * @return {array} random fron the createPhrases() function every time screen refrehes
     */
    getRandomPhrase()
    {
        let randomPhrase = (Math.floor(Math.random() * this.phrases.length));
        return this.phrases[randomPhrase];
    }
    
    // Function to start the game and resetting everything when its called
    startGame()
    {
        this.missed = 0;
        const phrase = document.getElementById('phrase').firstElementChild;
        phrase.innerHTML = '';
        const key = document.querySelectorAll('.key');
        for (let i=0; i<key.length; i++)
        {
                key[i].className = 'key';
                key[i].disabled = false;
        }

        const tries = document.querySelectorAll('.tries img');
        for (let i=0; i<tries.length; i++)
        {
            tries[i].src = "images/liveHeart.png";
        }

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        newPhrase.addPhraseToDisplay();
    }

    /**
     * @return {boolean} true if the length of phrase letters is equal to the length of .show class in the phrase
     */
    checkForWin()
    {
        const phraseLetters = document.querySelectorAll(".letter");
        const showLetters = document.querySelectorAll(".show");
        if(phraseLetters.length === showLetters.length)
        {
            return true;
        }
        else{
            return false;
        }
    }

    //Function to remove one life each time user guesses a wrong letter and calls gameOver() function if it is equal to 5
    removeLife() {
        const lives = document.querySelectorAll(".tries img");
        lives[this.missed].src = "images/lostHeart.png";
        this.missed += 1;
       
       if (this.missed === 5) {
         this.gameOver(false);
       }
      };

    // Function to be called to show the user a friendly message if they have won or not
    gameOver(gameWon)
    {
        const gameOverMesg = document.getElementById("game-over-message");
        if(gameWon === false)
        {
        overlay.style.display ="";
        gameOverMesg.innerHTML="Better Luck Next time";
        overlay.classList.add('lose');
        }
        else
        {
            overlay.style.display = "";
            gameOverMesg.innerHTML="Bravo, You Win";
            overlay.classList.add('win');
            overlay.classList.remove('lose');
        }
    }

    //Handles all the user interaction with the keyboard on the screen disbale all the button if its pressed once. Adds different classes to show the user if they have selected the correct letter. 
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent))
        {
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add("chosen");
            if(this.checkForWin()===true)
            {
                this.gameOver(true);
            }
        } else{
            button.classList.add('wrong');
            this.removeLife();
        }

        }
      
 }