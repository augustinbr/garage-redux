import { CARS, FETCH_CARS } from '../actions/index';


export default function(state, action) {
	switch (action.type) {
	case CARS: {
		return action.payload;
	}
	case FETCH_CARS: {
		console.log(action.payload)
		return action.payload;
	}
	default:
		return state;
	}
}