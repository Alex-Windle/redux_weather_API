import { FETCH_WEATHER } from '../actions/index'; 

// params reference application state? 
export default function(state = [], action) {
	switch (action.type) {
	case 'FETCH_WEATHER': 
		// adds new city to existing application state?
		return [action.payload.data, ...state];
	}
	return state; 
}