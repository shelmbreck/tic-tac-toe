// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded')
    document.getElementById('game-board').addEventListener('click', startGame)
    document.getElementById('').addEventListener('click', startGame)
})

// declare variables
var playerOne = "😍";
var playerTwo = "🤪";
var firstMove;
var gameBoard;
var checkWin;
var gameWon;
var startGame;
var declareWinner;
var turnCount; 
var winCombos = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one','four','seven'],
    ['two', 'five', 'eight'],
    ['one','five', 'nine' ],
    ['six', 'four', 'two']
];

//start the game
function startGame() {
gameBoard = Array.from(Array(9).keys());
for (var i = 0; i < box.length; i++) {
    box[i].innerText = '';
    box[i].addEventListener('click', turnClick, false);
    }
}

// Switch Players
function turnClick(player) {
    var player; 
    if (turnCount % 2 === 1) {
        player = playerOne //odd
    } else {
        player = playerTwo //even
    }        
    turnCount++
    turn(box.target.id, player) 
}