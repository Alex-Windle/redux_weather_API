import React, { Component } from 'react'; 

class GoogleMap extends Component {
	componentDidMount() {
		//CONNECT 3rd party library with REACT
		//create an embedded Google map on page
		//this.refs.map ---> WHERE to put map (in this DOM node)
		new google.maps.Map(this.refs.map, {
			//specification object
			zoom: 12, 
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}

	render() {
		// this.refs.map --> references HTML element 
		return <div ref="map" />;
	}
}

export default GoogleMap;
// What are refs? 
// --> An alternative to props to modify a component
// ---> Use case: rare. There are a few specific scenarios
// that require refs (integrating a 3rd party library, for example)
// ----> warning: do not use unless really necessary!