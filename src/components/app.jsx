import React from 'react';

// import container:
import Garage from '../containers/garage';
import CarList from '../containers/car-list';

const App = (props) => {
	return (
		<div className="app">
			<div className="left">
				<Garage />
			</div>
			<div className="right">
				<CarList />
			</div>
		</div>
	);
}

export default App;