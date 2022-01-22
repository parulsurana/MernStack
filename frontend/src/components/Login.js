import React from "react";
import { NavLink } from "react-router-dom";
import Signupic from "../images/signupic.svg";
import Loginform from "./Loginform";

export default function Login() {
	return (
		<>
			<section className='signin'>
				<div className='container mt-5'>
					<div className='signin-content'>
						<div className='signin-image'>
							<figure>
								<img src={Signupic} alt='signin-pic' />
							</figure>
							<NavLink to='/signup' className='signin-image-link'>
								Create an account
							</NavLink>
						</div>
						<div className='signin-form'>
							<h2 className='form-title'> Sign In </h2>
							<Loginform />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
