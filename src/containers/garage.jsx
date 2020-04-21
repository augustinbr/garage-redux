import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Garage extends Component {
	componentWillMount() {
		console.log(this.props.garage);
	}
	render() {
		return (
			<div>
				<div className="top">
					<div className="logo">
						<img src="https://res.cloudinary.com/dkpy2yoeq/image/upload/v1587471622/garage-redux/marvel_hnnxsw.jpg" alt="logo-marvel"/>
					</div>
				</div>
				<div className="bottom">
					<div className="description">
						<h3>Garage {this.props.garage}</h3>
						<p>Our garage is the best; with our experience, you can expect the
							best expertise you will be not sad !</p>
						<button type="button" className="new-car">Add a car</button>
					</div>
				</div>			
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		garage: state.garage
	}
}

export default connect(mapStateToProps)(Garage);