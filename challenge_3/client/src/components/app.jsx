import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { 
    constructor (props) { 
        super(props); 
        this.state = {
            won: false,
            turn: true, //first player's turn
            board: [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ]
        }
    }

    checkIfWon(column, row, currentPlayer) {
      console.log('column: ', column, 'row: ', row);
      var board = this.state.board;

        var vertical = function() {
          if ( (row - 3) < 0 ) {return false}

          for (var i = 0; i < 4; i++) {
            //debugger;
            if (board[column][row - i] != currentPlayer) {
            return false;
            }   
          }
          return true;
        }

        var horizontal = function() {
          var count = 0;
          for (var i = 0; i < 6; i++) {
            if (board[i][row] === currentPlayer) {
              count += 1;
              if (count === 4) {
                return true;
              }
            }    
            else { 
              count = 0;
            }
          }
          return false;
        }

        var majorDiagonal = function() {
          var count = 0;
          for (var i = 0; i < 6; i++) {
            if (column - 3 - i < 0) {
              // do nothing;
            } else {

              if (board[column - 3 - i][column - 3 - i] === currentPlayer) {
                count += 1;
                if (count === 4) {
                  return true;
                }
              } else { 
                count = 0;
              }
            }
          }
          return false;
        }


        var minorDiagonal = function() {
            
        }


      if (vertical() || horizontal() || majorDiagonal() || minorDiagonal()) {
        console.log('winner!')
        return true;
      } else {
        return false
      }

    }

    updateBoard(column) {
        //debugger;
        var currentPlayer;
        var row = this.state.board[column].indexOf(0);
        this.state.turn ? currentPlayer = 1 : currentPlayer = 2;
        // if (this.state.turn) {
        //     this.state.board[column][row] = 1;
        // } else {
        //     this.state.board[column][row] = 2;
        // }
        this.state.board[column][row] = currentPlayer;
        this.checkIfWon(column, row, currentPlayer);
        
        // if not won: 
        this.state.turn ? this.setState({turn: false}) : this.setState({turn: true})
      
        console.log(this.state.board);
        console.log(this.state.turn);

        //this.updateView();

    }

    updateView(row, column) {
      // FILL ME IN;

    }

    handleClick(column, row) {
        //console.log('i was clicked!');
        console.log('column was: ', column);
        //console.log(this);
        this.updateBoard(column);

    }

    resetBoard() {
      this.setState({
        board: [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
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

