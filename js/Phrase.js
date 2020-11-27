/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

  constructor(phrase) 
  {
    this.phrase = phrase.toLowerCase();
  }

  // function to add phrase to the display 
  addPhraseToDisplay() {
    const phraseContainer = document.getElementById("phrase").firstElementChild;

    [...this.phrase].forEach((phrase,i) => {
      if (this.phrase.charAt(i) === " ") {
        const space = document.createElement("li");
        space.classList.add("space");
        space.textContent = " ";
        phraseContainer.appendChild(space);
      } else {
        const letter = document.createElement("li");
        letter.classList.add("letter");
        letter.textContent = this.phrase.charAt(i);
        phraseContainer.appendChild(letter);
      }
    })
  }

  /**
  @return {boolean} true if the letter passed is in the phrase or not
   */
  checkLetter(letter)
  { 
    return (this.phrase.includes(letter));
  }

  //Adds a show class to the letter if it is in the current phrase
  showMatchedLetter(letter)
  {
    const allLetters = document.querySelectorAll(".letter");
    for (let i = 0; i < allLetters.length; i++) {
    if (letter === allLetters[i].innerHTML)
    allLetters[i].classList.add("show");
  }
}
}