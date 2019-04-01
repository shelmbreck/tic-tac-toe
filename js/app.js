// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
// Have Fun - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

// State Variables
var playerOne = "😍"
var playerTwo = "🤪"
var firstMove
var gameBoard
var checkWin
var gameWon
var startGame
var declareWinner
var turnCount = 1;
var winCombos = [
    ['zero', 'one', 'two',],    
    ['three', 'four', 'five'],
    ['six', 'five', 'six'],
    ['zero', 'three', 'six'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['zero', 'four', 'eight'],
    ['six', 'four', 'two']
]
var box = document.querySelectorAll('.box');

// start game
function startGame() {
    document.querySelector("#end-game").style.visibility = "hidden";
gameBoard = Array.from(Array(9).keys());
for (var i = 0; i < box.length; i++) {
    box[i].textContent = '';
    box[i].addEventListener('click', turnClick, false);
}
}

// Switch Players
function turnClick(box) {
    var player; 
    if (turnCount % 2 === 1) {
        player = playerOne //odd
    } else {
        player = playerTwo //even
    }        
    turnCount++
    turn(box.target.id, player) 
}

function turn(boxId, player) {
    gameBoard[boxId] = player;
    document.getElementById(boxId).textContent = player;
	let gameWon = checkWin(gameBoard, player)
    if (gameWon) {
        gameOver(gameWon)
    }
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => // a is the accumulator, e is the element, i is the index
		(e === player) && a.concat(i) || a, []); // if the elemnt equals the player, add accumulator to the index array
    let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) { //go through every element in the win
			gameWon = {index: index, player: player};
			break;
		}
    }  
    return (gameWon);
}

function gameOver (gameWon) {
    for( let index of winCombos[gameWon.index]) {
    for (var i = 0; i < box.length; i++ ) {
        box[i].removeEventListener('click', turnClick, false)
    } 
declareWinner(gameWon.player == playerOne && " 😍 wins!" || "🤪 wins!");
}
}

function declareWinner(who) {
	document.querySelector("#end-game").style.visibility = "visible";
    document.querySelector("#end-game").textContent = who;
    document.querySelector("#message").textContent = who;
}

function emptySquares() {
	return gameBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
	return emptySquares()[0];
}

function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < box.length; i++) {
			box[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie Game!")
		return true;
	} else {
        return false
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-game-btn").addEventListener("click", function(e) {
        preventDefault(e)
    })
    startGame()
})
