// Axios: Promise based HTTP client for the browser 
// Make XMLHttpRequests from the browser
import axios from 'axios'; 

const API_KEY = 'f4d6fcd505f3ebe966510a9c13b86f29'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER'; 

// Middleware: These functions take in actions
// and modify them before hitting the reducer and 
// updating state. 

// This function is an action creator. 
// --> user picks a city
// ----> hits the endpoint w/ city 
// ------> package up data as an action
// --------> pass up action to reducers
// ----------> reducers update state

// Redux Promise is a middleware. Middlewares have the ability to 
// stop or manipulate actions BEFORE they hit ANY reducer
// whatsoever. Redux Promise sees the incoming action, looks at the 
// payload property (request)...if that's a promise, Redux Promise STOPS the 
// action entirely. Once the request finishes, it dispatches a new action
// with the RESOLVED request. It "unwraps the promise" for us.

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // returns a promise

	return {
		type: FETCH_WEATHER,
		payload: request // Redux Promise PAUSES to allow data call
	};
}