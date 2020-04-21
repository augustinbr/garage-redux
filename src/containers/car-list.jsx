import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import component to render cars:
import Car from '../components/car';

// import action to trigger with dispatch:
import fetchCars from '../actions/index';

class CarList extends Component {
	componentWillMount() {
		console.log(this.props.fetchCars());
	}

	render() {
		return (
			<div>
				{
					this.props.cars.map((car) => {
						return <Car key={car.owner} owner={car.owner} model={car.model} brand={car.brand} plate={car.plate} />;
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cars: state.cars
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCars }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);