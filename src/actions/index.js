// TODO: add and export your own actions
export const CARS = 'CARS';
export const FETCH_CARS = 'FETCH_CARS';


// action to update the state of cars

export function setCars() {
	return {
		type: CARS,
		payload: cars
	};
}

export function fetchCars() {
	const url = 'https://wagon-garage-api.herokuapp.com/augustin/cars';
	const promise = fetch(url).then(res => res.json());
	return {
		type: FETCH_CARS,
		payload: promise
	};
}