import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
	return (
		<>
			<div id='notfound'>
				<div className='notfound'>
					<div className='notfound-404'>
						<h1>404</h1>
					</div>
					<h2>
						We are sorry, Page not found.
						<p className='mb-5'>
							The page you are looking for is temporarily unavailable or might
							it's name has been changed.
						</p>
						<NavLink to='/'>Back to HomePage</NavLink>
					</h2>
				</div>
			</div>
		</>
	);
}
