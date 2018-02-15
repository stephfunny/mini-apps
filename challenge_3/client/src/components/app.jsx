import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { 
    constructor (props) { 
        super(props); 
        this.state = {
            won: false,
            turn: true, //first player's turn
            board: 
            // [
            //     [0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0]
            // ]
            [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 1, 2, 0, 0, 0, 0],
                [0, 1, 1, 2, 0, 0, 0],
                [0, 1, 2, 2, 2, 0, 0],
                [1, 2, 1, 2, 1, 2, 0]
            ]



        }
    }

    checkIfWon(row, column, currentPlayer) {
      //console.log('column: ', column, 'row: ', row);
      var board = this.state.board;

        var vertical = function() {
          if (row > 2 ) {return false} // if you're not even on rows 4 or above

          for (var i = 1; i < 4; i++) {
            //debugger;
            if (board[row + i][column] != currentPlayer) {
              console.log('vertical fail');
              return false;
            }   
          }
          console.log('vertical win!');
          return true;
        }

        var horizontal = function() {
          var count = 0;
          for (var i = 0; i < 7; i++) {
            //if (i === 3) {debugger}
            if (board[row][i] === currentPlayer) {
              count += 1;
              if (count === 4) {
                console.log('horizontal win!');
                return true;
              }
            }    
            else { 
              count = 0;
            }
          }
          console.log('horizontal fail');
          return false;
        }

        var majorDiagonal = function() {
          //debugger;
          var count = 0;
          for (var i = 0; i < 6; i++) {
            if ( row + 3 - i > 5 || column - 3 + i > 6) {
              // do nothing;
            } 
            // else if (!board[column - 3]) {
            //   // do nothing;
            // }
             else {
              if (board[row + 3 - i][column - 3 + i] === currentPlayer) {
                count += 1;
                if (count === 4) {
                  console.log('majorDiagonal win!')
                  return true;
                }
              } else { 
                count = 0;
              }
            }
          }
          console.log('majorDiagonal fail')
          return false;
        }


        var minorDiagonal = function() {
          var count = 0;
          for (var i = 0; i < 6; i++) {
            if ( row + 3 - i > 5 || column + 3 - i > 6) {
              // do nothing;
            } 
            // else if (!board[column - 3]) {
            //   // do nothing;
            // }
             else {
              //debugger;
              if (board[row + 3 - i][column + 3 - i] === currentPlayer) {
                count += 1;
                if (count === 4) {
                  console.log('minorDiagonal win!')
                  return true;
                }
              } else { 
                count = 0;
              }
            }
          }
          console.log('minorDiagonal fail')
          return false;
        }


      if (vertical() || horizontal() || majorDiagonal() || minorDiagonal()) {
        console.log('winner!')
        return true;
      } else {
        console.log('loser!')

        return false
      }

    }

    updateBoard(column) {
        //debugger;
        var board = this.state.board;
        var currentPlayer;
        
        //debugger;
        var chooseRow = function(column) {
          for (var i = 0; i <= 5; i++) {
            if (board[5 - i][column] === 0) {
              return 5 - i;
            }
          }
          // return false;
        }

        var row = chooseRow(column);

        this.state.turn ? currentPlayer = 1 : currentPlayer = 2;

        this.state.board[row][column] = currentPlayer;
        this.checkIfWon(row, column, currentPlayer);
        
        // if not won: 
        this.state.turn ? this.setState({turn: false}) : this.setState({turn: true})
      
        console.log(this.state.board);
        //console.log(this.state.turn);

        //this.updateView();

    }

    updateView(row, column) {
      // FILL ME IN;

    }

    handleClick(column, row) {
        //console.log('i was clicked!');
        //console.log('column was: ', column);
        //console.log(this);
        this.updateBoard(column);

    }

    resetBoard() {
      this.setState({
        board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ],
        turn: true
      });    
      console.log('board reset!', this.state.board);
    }

    render() {
        return (
          <div>
            <div id="board">
            {[0, 1, 2, 3, 4, 5].map( (x, i) => 
              <Row board={this.state.board} turn={this.state.turn} key={i} rowKey={i} handleClick={this.handleClick.bind(this)}/>
              )}
              
            </div>
            <div>
              <br></br>
              <button onClick={this.resetBoard.bind(this)}>Reset board</button>
            </div>

          </div>
        );
    }
}

export default App;

