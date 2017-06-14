import React, { Component } from 'react';
import { connect } from 'react-redux';  
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/google_map.js'; 

class WeatherList extends Component {
	renderWeather(cityData) {
		const key = cityData.city.id;
		const city = cityData.city.name;
		const temps = cityData.list.map(location => location.main.temp); 
		const pressure = cityData.list.map(location => location.main.pressure);
		const humidity = cityData.list.map(location => location.main.humidity);
		
		// ES6 destructuring
		//--> Look for .lon, .lat properties on the coord object
		//---> Then, assign new const "lon" and "lat"
		//----> SUPER COOL!!!! 
		const {lon, lat} = cityData.city.coord;
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		return (
			<tr key={key}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<Chart data={temps} color="red" unit="k" /> 
				<Chart data={pressure} color="orange" unit="hPa" />
				<Chart data={humidity} color="blue" unit="%" />
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