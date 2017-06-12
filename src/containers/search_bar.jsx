import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 

import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }; 

		// "this" keyword refers to the object, SearchBar.
		// this.onInputChange identifies the method on the object.

		// If a callback function includes a reference to "this",
		// the value of "this" will be an unidentified context, 
		// not the SearchBar object. The solution...binding!

		// "this" refers to the SearchBar. this.onInputChange 
		// tells us to expect a function, or method called "onInputChange"
		// on the object. 

		// Bind the function, onInputChange, to "this" 
		// (the SearchBar object). Then, reference this 
		// bound instance with 'this.onInputChange'.

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		// stops browser from submitting form
		event.preventDefault();

		// fetch weather data
		// fire action creator
		this.props.fetchWeather(this.state.term);

		// in order to connect this container to Redux (necessary because we
		// now want to pass data to a reducer) import Redux library at this point.

		// clear search bar 
		this.setState({ term: '' }); 
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
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

// This connects the container <---> ACTION CREATOR  
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// Pass in null so mapDispatch... inserted in 1st index
export default connect(null, mapDispatchToProps)(SearchBar);