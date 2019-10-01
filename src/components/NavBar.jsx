import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light  mb-3" style={{ backgroundColor: '#e3f2fd' }}>
			<Link className="navbar-brand" to="/">
				<img
					src={require('../assets/images/logo/logo-task.png')}
					width="30"
					height="30"
					class="d-inline-block align-top"
					alt=""
				/>
				<span className="p-2">Delivo-todo</span>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<ul className="navbar-nav ml-auto">
					<NavLink className="nav-item nav-link" to="/tasks">
						<i className="fa fa-tasks" /> Tasks <span className="sr-only">(current)</span>
					</NavLink>
					<NavLink className="nav-item nav-link" to="/login">
						<i className="fa fa-user" /> login
					</NavLink>
					<NavLink className="nav-item nav-link" to="/register">
						<i class="fa fa-user-plus" /> Register
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
