import React from 'react';
import ReactDOM from 'react-dom';

var Input = ({handleSubmit}) => {

		return (
			<div>
				<br></br>
				<form	
					onSubmit={
						handleSubmit.bind(this)
					}
				>
					<input 
						// onChange={
						// 	this.handleInput.bind(this)
						// }
						type='text' name='numOfPins'

						>
						</input>
					<input type='submit' value='How many pins?'></input>
					
				</form>
			</div>
		)
	}



export default Input;


window.Input = Input

