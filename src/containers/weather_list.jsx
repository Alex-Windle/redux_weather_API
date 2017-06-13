import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { Sparklines, SparklinesLine } from 'react-sparklines';

// This component only displays data (from props)

class WeatherList extends Component {
	renderWeather(cityData) {
		return (
			<tr key={cityData.city.id}>
				<td>{cityData.city.name}</td>
				<td>
					<Sparklines data={[99, 95, 91, 99, 100]}>
						<SparklinesLine color="orange" />
					</Sparklines>
				</td>
			</tr>
		); 
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		); 
	}
}

// Use CONNECT function to hook up component w/ state
function mapStateToProps({ weather }) {
	// const weather = state.weather

	// ES6 --> shortcut to reference state
	// return { weather: state.weather }
	return { weather }; 
}

export default connect(mapStateToProps)(WeatherList);