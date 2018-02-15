import React from 'react';
import ReactDOM from 'react-dom';

var Column = (props) => {
    return (
        <div onClick={ () => console.log('i was clicked!', this)} className="column" data-x="1" data-y="0"/>
        )
}

export default Column;

window.Column = Column;
