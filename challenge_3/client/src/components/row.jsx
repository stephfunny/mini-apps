import React from 'react';
import ReactDOM from 'react-dom';


var Row = (props) => {
    return ( 
    <div className="row">
      {[0, 1, 2, 3, 4, 5, 6].map( (x, i) => 
        <Column onClick={props.handleClick} key={i}/>
        )}

    </div>
    )};


export default Row;

window.Row = Row;