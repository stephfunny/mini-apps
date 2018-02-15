import React from 'react';
import ReactDOM from 'react-dom';

var Column = (props) => {
	if (props.turn === true) {
    return (
        <div onClick={function() {props.handleClick(props.myKey)}} className="column" style={{color:'red'}}></div>
    )} else {
    	return (
        <div onClick={function() {props.handleClick(props.myKey)}} className="column" style={{color:'blue'}}></div>
    )
    }

}

export default Column;

window.Column = Column;


// () => console.log('i was clicked!', this)