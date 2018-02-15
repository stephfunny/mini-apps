import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleInput(e) {
		e.preventDefault();
		//console.log(e);
		console.log(e.target);
		console.log(e.target.children[0].value);
		//console.log('test')
		this.setState({
			//value: value

		})

	}

	render() {

		return (
			<div>
				<br></br>
				<form	
					onSubmit={
						this.handleInput.bind(this)
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

