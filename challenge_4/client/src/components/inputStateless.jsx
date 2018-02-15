import React from 'react';
import ReactDOM from 'react-dom';

var Input = ({handleInput}) => {

		return (
			<div>
				<br></br>
				<form	
					onSubmit={
						handleInput.bind(this)
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


}


export default Input;


window.Input = Input

