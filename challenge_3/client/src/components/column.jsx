import React from 'react';
import ReactDOM from 'react-dom';

var Column = (props) => {
	// if (props.turn === true) {
 //    return (
 //        <div onClick={function() {props.handleClick(props.columnKey, props.rowKey)}} className="column" style={{color:'red'}}></div>
 //    )} else {
 //    	return (
 //        <div onClick={function() {props.handleClick(props.columnKey, props.rowKey)}} className="column" style={{color:'blue'}}></div>
 //    )
 //    }

	if (props.board[props.rowKey][props.columnKey] === 1) {
    return (
        <div onClick={function() {
        	props.handleClick(props.columnKey, props.rowKey)}} 
        	className="column" 
        	style={{background:'#9B2C2C'}}></div>
    )} else if (props.board[props.rowKey][props.columnKey] === 2) {
 			return (
        <div onClick={function() {
        	props.handleClick(props.columnKey, props.rowKey)}} 
        	className="column" 
        	style={{background:'#665C5C'}}></div>
    	)
    }



     else {
    	return (
        <div onClick={function() {props.handleClick(props.columnKey, props.rowKey)}} className="column"></div>
    )}


}

export default Column;

window.Column = Column;


// () => console.log('i was clicked!', this)