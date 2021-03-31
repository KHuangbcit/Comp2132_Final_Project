// Get ID from HTML
const playerFirstDiceImage = document.getElementById("player-first-dice-image");
const playerSecondDiceImage = document.getElementById("player-second-dice-image");
const computerFirstDiceImage = document.getElementById("computer-first-dice-image");
const computerSecondDiceImage = document.getElementById("computer-second-dice-image");
const playerRoundScoreOutput = document.getElementById("player-round-score");
const playerTotalScoreOutput = document.getElementById("player-total-score");
const computerRoundScoreOutput = document.getElementById("computer-round-score");
const computerTotalScoreOutput = document.getElementById("computer-total-score");
const scoreDescriptionOutput = document.getElementById("score-description");
const playerFirstDiceOutput = document.getElementById("p-first-dice");
const playerSecondDiceOutput = document.getElementById("p-second-dice");
const computerFirstDiceOutput = document.getElementById("c-first-dice");
const computerSecondDiceOutput = document.getElementById("c-second-dice");


// Player and Computer Dice Variables
let playerFirstDice;
let playerSecondDice;
let playerRoundScore;
let playerTotalScore = 0;
let computerFirstDice;
let computerSecondDice;
let computerRoundScore;
let computerTotalScore = 0;



// function to roll dice
function diceRoll(){
    // Roll and assign dice values
    playerFirstDice = Math.floor(Math.random() * 6) + 1;
    playerSecondDice = Math.floor(Math.random() * 6) + 1;
    computerFirstDice = Math.floor(Math.random() * 6) + 1;
    computerSecondDice = Math.floor(Math.random() * 6) + 1;
    console.log(playerFirstDice, playerSecondDice, computerFirstDice, computerSecondDice);
    playerFirstDiceImage.src = `images/dice${playerFirstDice}.png`;
    playerSecondDiceImage.src = `images/dice${playerSecondDice}.png`;
    computerFirstDiceImage.src = `images/dice${computerFirstDice}.png`;
    computerSecondDiceImage.src = `images/dice${computerSecondDice}.png`;
    playerFirstDiceOutput.innerHTML = `Dice 1: ${playerFirstDice}`;
    playerSecondDiceOutput.innerHTML = `Dice 2: ${playerSecondDice}`;
    computerFirstDiceOutput.innerHTML = `Dice 1: ${computerFirstDice}`;
    computerSecondDiceOutput.innerHTML = `Dice 2: ${computerSecondDice}`;



    //Calculate round and total scores
    if( playerFirstDice == 1 || playerSecondDice == 1 ){
        playerRoundScore = 0;
    }else{
        if( playerFirstDice == playerSecondDice ){
            playerRoundScore = 2 * (playerFirstDice + playerSecondDice);
            playerTotalScore += playerRoundScore;
        }else{
            playerRoundScore = playerFirstDice + playerSecondDice;
            playerTotalScore += playerRoundScore;
        }
    }

    if( computerFirstDice == 1 || computerSecondDice == 1 ){
        computerRoundScore = 0;
    }else{
        if( computerFirstDice == computerSecondDice ){
            computerRoundScore = 2 * (computerFirstDice + playerSecondDice);
            computerTotalScore += computerRoundScore;
        }else{
            computerRoundScore = computerFirstDice + computerSecondDice;
            computerTotalScore += computerRoundScore;
        }
    }
    playerRoundScoreOutput.innerHTML = `Score this round: ${playerRoundScore}`;
    playerTotalScoreOutput.innerHTML = `Total Score: ${playerTotalScore}`;
    computerRoundScoreOutput.innerHTML = `Score this round: ${computerRoundScore}`;
    computerTotalScoreOutput.innerHTML = `Total Score: ${computerTotalScore}`;

    counter += 1;
    console.log(playerRoundScore, playerTotalScore, computerRoundScore, computerTotalScore);
}


// function to track the round and provide description who is winning
let counter = 0;

function roundTracker(){
    if(counter != 3){
        if(playerTotalScore > computerTotalScore){
            scoreDescriptionOutput.innerHTML = `You are winning ${playerTotalScore} to ${computerTotalScore}.`;
        }else if(playerTotalScore < computerTotalScore){
            scoreDescriptionOutput.innerHTML = `You are losing ${playerTotalScore} to ${computerTotalScore}.`;
        }else{
            scoreDescriptionOutput.innerHTML = `You are tied ${playerTotalScore} to ${computerTotalScore}.`;
        }
    }else{
        // counter hit 3 rounds, disable roll dice button!
        rollDice.disabled = true;
        if(playerTotalScore > computerTotalScore){
            scoreDescriptionOutput.innerHTML = `Congratulations! You won ${playerTotalScore} to ${computerTotalScore}!
            <br>Click on New Game to start a new game! <br><img src="images/trophy.png" alt="">`;
        }else if(playerTotalScore < computerTotalScore){
            scoreDescriptionOutput.innerHTML = `Sorry, You lost ${playerTotalScore} to ${computerTotalScore}, try again!
            <br>Click on New Game to start a new game! <br><img src="images/try-again.png" alt="">`;
        }else{
            scoreDescriptionOutput.innerHTML = `The game ended in a ${playerTotalScore}:${computerTotalScore} tie, try again!
            <br>Click on New Game to start a new game! <br><img src="images/try-again.png" alt="">`;
        }
    }
}


//Buttons
const rollDice = document.getElementById("roll-dice");
const newGame = document.getElementById("new-game");

//Click Roll Dice button
rollDice.addEventListener("click", function(){
    console.log("Roll Dice is Working")
    diceRoll();
    roundTracker();
});

//Click New Game button
newGame.addEventListener("click", function(){
    console.log("New Game is Working")
    //Reset counter, dice images and variables
    counter = 0;
    playerFirstDiceImage.src = `images/dice1.png`;
    playerSecondDiceImage.src = `images/dice1.png`;
    computerFirstDiceImage.src = `images/dice1.png`;
    computerSecondDiceImage.src = `images/dice1.png`;
    playerTotalScore = 0;
    computerTotalScore = 0;
    rollDice.disabled = false;


    //Reset GUI
    playerFirstDiceOutput.innerHTML = `Dice 1: `;
    playerSecondDiceOutput.innerHTML = `Dice 2: `;
    computerFirstDiceOutput.innerHTML = `Dice 1: `;
    computerSecondDiceOutput.innerHTML = `Dice 2: `;
    playerRoundScoreOutput.innerHTML = `Score this round: `;
    playerTotalScoreOutput.innerHTML = `Total Score: `;
    computerRoundScoreOutput.innerHTML = `Score this round: `;
    computerTotalScoreOutput.innerHTML = `Total Score: `;
    scoreDescriptionOutput.innerHTML = `Player and Computer are tied.`;
});


// How to play and Rules tab
const $tabs = $('.tabs');
const $content = $('.content');

// Hide the content when page loads
$content.hide();

// Accordion
$tabs.click(function(){
    $(this).next().slideToggle();                 
});