import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { Link } from 'react-router-dom';

class LoginForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	doSubmit = () => {
		// Call the server
		console.log('Submitted');
	};

	render() {
		return (
			<div>
				<div className="d-flex justify-content-center">
					<img
						src={require('../assets/images/logo/logo-task.png')}
						width="100"
						height="100"
						className="d-inline-block align-top"
						alt=""
					/>
				</div>
				<h1 className="d-flex justify-content-center">Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
				<h4>
					Don't have an account? {' '}
					<span>
						<Link to="/register">Register</Link>
					</span>
				</h4>
			</div>
		);
	}
}

export default LoginForm;
