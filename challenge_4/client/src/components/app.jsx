import React from 'react'; import ReactDOM from 'react-dom';
import Pin from './pin.jsx'; import ScoreBoard from './scoreBoard.jsx';
import Input from './input.jsx'
var _ = require('underscore'); // correct place to put this?


class App extends React.Component { 
    constructor (props) { 
        super(props); 
        this.state = {
            turn: 1,
            pinBoard: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
    }
    handleSubmit(e) {
      e.preventDefault();
      //console.log(e);
      //console.log(e.target);
      console.log(e.target.children[0].value);
    }

    whoseTurn() {

    }

    updatePins() {


    }

    updateScore() {

    }



    render() {
      var alley = [];
        var pins = _.range(0,10).map( (x) => <Pin 
          key={x} pinKey={x} 
          pinBoard={this.state.pinBoard}
        />);

        alley.push(pins);
        alley.push(<ScoreBoard />);
        alley.push(<Input handleSubmit={this.handleSubmit}/>);

        return alley;
    }

}

export default App;