import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item active'>
							<a className='nav-link' href='/'>
								Home
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' href='/about'>
								About
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' href='/contact'>
								Contact
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' href='/login'>
								Login
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' href='/signup'>
								Registration
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' href='/logout'>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
