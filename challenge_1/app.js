// Basic TicTacToe

var currentPlayer = 'x';
//var x = []; var o = [];
var board = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
]

var togglePlayer = function() {
	console.log('currentPlayer is ', currentPlayer);
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

var onClick = function() {
  setTile(this.id, currentPlayer);
}

// var tiles = document.getElementsByClassName('tile');
// tiles.addEventListener("click", onClick.call(this));

var setTile = function(id, player) {
	// check if tile is open
	if (document.getElementById(id).innerText === '') { 
		document.getElementById(id).innerText = player;

		updateBoard(id, player);
		//logMove(id, player);
  	//checkIfWon(id, eval(player));
		togglePlayer();

	} else {
		document.getElementsByClassName('tryagain').innerText = 'Sorry, try again';
		console.log('try again'); // FIX ME
	}
	//console.log('x is ', x, 'o is ', o);

}
var updateBoard = function(id, player) {


}

var index = {
	0: '[0][0]',
	1: '[1][0]',
	2: '[2][0]',
	2: '[0][1]',
	2: '[1][1]',
	2: '[2][1]',
	2: '[0][2]',
	2: '[1][2]',
	2: '[2][2]',
}

var resetBoard = function() {
	for (var i = 0; i < 9; i++) {
		document.getElementById(i).innerText = '';
	}
	currentPlayer = 'x';
}

// var checkIfWon = function(id, player) {
// 	console.log('CHECK IF WON', id, player)
// 	//debugger;
// 	var currentCol = id % 3;
// 	if (player.includes( (id+3) % 9) && player.includes( (id+6) % 9) ) {
// 		console.log('VERTICAL WIN!');
// 	}
// 	if (player.includes( (id+3) % 9) && player.includes( (id+6) % 9) ) {
// 		console.log('horizontal WIN!');
// 	} 
// 	if (player.includes( (id+4) % 9) && player.includes( (id+8) % 9) ) {
// 		console.log('MAJOR DIAGONAL WIN!');
// 	}
// 	if (player.includes(2) && pplayer.includes(4) && player.includes(6)) {
// 		console.log('MINOR DIAGONAL WIN!');
// 	}

// }

	// diff = []; 
	// player.sort();

	// for (var i = 0; i < player.length - 1; i++) {
	// 	diff.push(player[i + 1] - player[i]);
	// }

	// diff.sort();
	// console.log('diff of ', player, ' is ', diff);

	// if (diff.includes(3)) {
	// 	diff.splice(diff.indexOf(3), 1);
	// //debugger;
	// 	if (diff.includes(3)) {
	// 		console.log(player, ' WON!');
	// 	}
	// }
		// if (o.length > 1) {
		// 	oDifferences.push(o[o.length - 1] - o[o.length - 2])
		// }

		
	//console.log('x is ', x, 'o is ', o);
	// for (var i = 0; i < x.length; )

	// xDifferences = x.map( (item, index, col) => {
	// 	if (x[index + 1]) {
	// 		x[index + 1] - x[index];
	// 	}
	// })
	// horizontal: 3 consecutive tiles, starting at 1, 4, or 7
	// vertical: 1, 4, 7 | if 3 moves % 3 === 0, check again for moves + 1, moves + 2
	// [0, 3, 6] ==> [3, 3]
	// diagonal: 
		// [0, 4, 8]  ==> [4, 4] 
		// [2, 4, 6]  ==> [2, 2]
		// edge cases: [0, 2, 4] [4, 6, 8]
		// if there exists two differences between two numbers that equal 2, or 4



// var logMove = function(id, player) {
// 		//player === 'x' ? x.push(id) : o.push(id);
// 	if (player === 'x') {
// 		x.push(id);
// 	} else {
// 		o.push(id);
// 	}
// }










