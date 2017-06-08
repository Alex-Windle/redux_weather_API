import React, { Component } from 'react'; 

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }; 

		// "this" keyword refers to the object, SearchBar.
		// this.onInputChange identifies the method on the object.

		// If a callback function includes a reference to "this",
		// the value of "this" will be an unidentified context, 
		// not the SearchBar object.

		// "this" refers to the SearchBar. this.onInputChange 
		// tells us to expect a function, or method called "onInputChange"
		// on the object. 

		// Bind the function, onInputChange, to "this" 
		// (the SearchBar object). Then, reference this 
		// bound instance with 'this.onInputChange'.
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	render() {
		return (
			<form className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}

}

export default SearchBar;