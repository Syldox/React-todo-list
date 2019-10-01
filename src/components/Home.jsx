import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" alt="First slide" src={require('../assets/images/cim2.jpg')} />
					</div>
				</div>
			</div>

			<div className="container d-flex justify-content-center ">
				<Link to="/login">
					<span className="p-2">
						<button type="button" className="btn btn-outline-info">
							Login
						</button>
					</span>
				</Link>
				<Link to="/register">
					<span className="p-2">
						<button type="button" className="btn btn-outline-info">
							Register
						</button>
					</span>
				</Link>
			</div>
		</div>
	);
}
