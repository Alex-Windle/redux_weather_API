import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.jsx';
import WeatherList from '../containers/weather_list.jsx';
import Chart from './chart.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
