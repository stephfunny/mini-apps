import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { 
    constructor (props) { //this.props is an array: [1,2,3,4,5,6,7]
        super(props); 
        this.state = {
            won: false,
            turn: 'red',
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ]
        }
    }
    handleClick(e) {
        console.log('i was clicked!');
        console.log(e, this);
    }

    render() {
        return (
          <div id="board">
          {[0, 1, 2, 3, 4, 5].map( (x, i) => 
            <Row key={i} handleClick={this.handleClick}/>
            )}
            

          </div>
        );
    }
    
}

export default App;





// console.log('i was clicked!')