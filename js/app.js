/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;

//Adding an event listener to the button to start the game
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () =>
{   
    game = new Game();
    game.startGame();
});

// Adding click and keyboard event listeners to the querty keyboard on the display
const key = document.getElementsByClassName("key");
for(let i=0; i<key.length; i++)
{
    key[i].addEventListener('click', (e)=>
    {
        game.handleInteraction(key[i]);
    })
}

for(let i=0; i<key.length; i++)
{
   addEventListener('keydown', (e)=>
    {
        if(e.key.toLowerCase() === key[i].textContent)
        {
        game.handleInteraction(key[i]);       
        }
    })
}
