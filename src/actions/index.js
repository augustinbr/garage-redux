// TODO: add and export your own actions
export const CARS = 'CARS';
export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';



// action to update the state of cars

export function setCars() {
	return {
		type: CARS,
		payload: cars
	};
}

export function fetchCars(name) {
	const url = `https://wagon-garage-api.herokuapp.com/${name}/cars`;
	const promise = fetch(url).then(res => res.json());
	return {
		type: FETCH_CARS,
		payload: promise
	};
}

// [...]
export function createCar(name, body, callback) {
	const request = fetch(`https://wagon-garage-api.herokuapp.com/${name}/cars`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	}).then(response => response.json())
	.then(callback);
	return {
		type: CAR_CREATED,
		payload: request
	};
}