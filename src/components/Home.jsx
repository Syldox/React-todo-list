import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100 mb-3"
							alt="First slide"
							src={require('../assets/images/E5PE1X.jpg')}
						/>
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
