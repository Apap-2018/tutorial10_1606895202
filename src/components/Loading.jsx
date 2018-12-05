import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const Loading = (props) => {
	return (
		<div>
			<img src={logo} className="App-logo" alt="logo" />
			<div className="row">
				<span className="text-center col-sm-12">{props.msg}</span>
			</div>
		</div>
	)
}

Loading.defaultProps = {
	msg : "Loading..."
}