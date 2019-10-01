import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { Link } from 'react-router-dom';

class RegisterForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().required().email().label('Username'),
		password: Joi.string().required().min(5).label('Password')
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
						class="d-inline-block align-top"
						alt=""
					/>
				</div>
				<h1 className="d-flex justify-content-center">Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Register')}
					<h4>
						Already have an account?{' '}
						<span>
							<Link to="/login">Login</Link>
						</span>
					</h4>
				</form>
			</div>
		);
	}
}

export default RegisterForm;
