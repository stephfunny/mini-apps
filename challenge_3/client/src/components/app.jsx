import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { 
    constructor (props) { //this.props is an array: [1,2,3,4,5,6,7]
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

    checkIfWon(row, column) {

        var vertical = function() {

        }

        var horizontal = function() {
            
        }

        var majorDiagonal = function() {
            
        }
        
        var minorDiagonal = function() {
            
        }



    }

    updateBoard(column) {
        //console.log('column is ', column, 'and board is ', this.state.board);
        var firstAvailable = this.state.board[column].indexOf(0);

        if (this.state.turn) {
            this.state.board[column][firstAvailable] = 1;
        } else {
            this.state.board[column][firstAvailable] = 2;
        }

        this.state.turn ? this.setState({turn: false}) : this.setState({turn: true})
      
        console.log(this.state.board);
        console.log(this.state.turn);
        //this.render();

        this.updateView();
    }

    updateView(column, row) {

    }

    handleClick(column) {
        //console.log('i was clicked!');
        console.log('column was: ', column);
        //console.log(this);
        this.updateBoard(column);

    }

    render() {
        return (
          <div id="board">
          {[0, 1, 2, 3, 4, 5].map( (x, i) => 
            <Row turn={this.state.turn} key={i} handleClick={this.handleClick.bind(this)}/>
            )}
            

          </div>
        );
    }
}

export default App;

// board: [
//                 [0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0]
//             ]



// console.log('i was clicked!')