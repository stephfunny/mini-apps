
var wins = {
	x: 0,
	o: 0
}
var won = false;
var board = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8] 
];
var currentPlayer = !currentPlayer ? 'x' : currentPlayer;
// var init = function() {

// 	var playerOne = prompt('Player 1, what\'s your name?');
// 	// debugger;
// 	document.getElementById('playerOne').innerHTML = 'test';
// 	var playerTwo = prompt('Player 2, what\'s your name?');
// 	document.getElementById('playerTwo').innerText = playerTwo;
// }

// init();

var togglePlayer = function() {
	//console.log('currentPlayer is ', currentPlayer);
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

var onClick = function() {
	if (!won) {
		var x = this.cellIndex; var y = this.parentElement.rowIndex;
		setElementText('message','');
	  placeTile(x, y);
	} else {
		setElementText('message','Game Over. Please reset to play again.')
	}

}

var placeTile = function(x, y) {
	if (typeof board[y][x] === "number") {
		board[y][x] = currentPlayer;
		updateView(x, y, currentPlayer);
		if (!checkIfPlayerWon(x, y, currentPlayer)) {
			// debugger;
			togglePlayer();
		} 
	}
	else {
	setElementText('message', 'Sorry, please try again!')
	}

	//console.log(board);
}

var updateView = function(x, y, updateToThis) {
	document.getElementById(y).children[x].innerText = updateToThis;
}

var resetBoardView = function() {
	currentPlayer;
	// debugger;
	for (var x = 0; x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			updateView(x, y, '');
		}
	}
	//currentPlayer = 'x';
	board = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8]
	];
  setElementText('message', '');
  won = false;

}

var checkIfPlayerWon = function(x, y, currentPlayer) {
	//check horizontal - keep y constant, check all x
	var checkHorizontal = function() {
		for (var i = 0; i < 3; i++) {
			if (board[y][i] != currentPlayer) {
				return false;
			} 	
		}
		return true;
	}
	var checkVertical = function() {
		for (var i = 0; i < 3; i++) {
			if (board[i][x] != currentPlayer) {
				return false;
			} 	
		}
		return true;
	}
	var checkMajorDiagonal = function() {
		for (var i = 0; i < 3; i++) {
			if (board[i][i] != currentPlayer) {
				return false;
			}
		}
		return true;
	}
	var checkMinorDiagonal = function() {
		if (board[2][0] != currentPlayer) {
			return false;
		}
		if (board[1][1] != currentPlayer) {
			return false;
		}
		if (board[0][2] != currentPlayer) {
			return false;
		}
		return true;
	}	
	if (checkHorizontal() || checkVertical() || 
			checkMajorDiagonal() || checkMinorDiagonal()) {
		// debugger;
		setElementText("message", `Congrats ${currentPlayer}, you won!`);
		wins[currentPlayer] += 1;
		setElementText(currentPlayer + '-score', wins[currentPlayer])
		won = true;
		return true;
	}

}

var setElementText = function(id, message) {
	document.getElementById(id).innerText = message;
}
