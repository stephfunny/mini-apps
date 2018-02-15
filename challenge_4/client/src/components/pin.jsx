import React from 'react';
import ReactDOM from 'react-dom';

var Pin = ({pinKey, pinBoard}) => {
	if (pinBoard[pinKey]) {
	    return (
	    	<div className='pin'>Pin {pinKey}</div>
	    	)

	} else {

		return <div></div>
	
	}




	}


export default Pin;


window.Pin = Pin

//&nbsp;
