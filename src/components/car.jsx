import React from 'react';

const Car = (props) => {
	return (
		<div className="car">
			<div className="car__left">
				<img src="https://res.cloudinary.com/dkpy2yoeq/image/upload/v1587475534/garage-redux/cocci_jhaxxc.jpg" alt="cocci"/>
			</div>
			<div className="car__right">
				<div className="car__description">
					<h3>{props.owner}</h3>
					<h6>{props.brand} - {props.model} - {props.plate}</h6>				
				</div>
			</div>
		</div>
	);
}

export default Car;