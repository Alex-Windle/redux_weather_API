import React, { Component } from 'react';
import { connect } from 'react-redux';  
import Chart from '../components/chart.jsx';

class WeatherList extends Component {
	renderWeather(cityData) {
		const key = cityData.city.id;
		const city = cityData.city.name;
		const temps = cityData.list.map(location => location.main.temp); 
		const pressure = cityData.list.map(location => location.main.pressure);
		const humidity = cityData.list.map(location => location.main.humidity);
		
		return (
			<tr key={key}>
				<td>{city}</td>
				<Chart data={temps} color="red" /> 
				<Chart data={pressure} color="orange" />
				<Chart data={humidity} color="blue" />
			</tr>
		); 
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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