import React from "react";

export default function Loginform() {
	return (
		<>
			<form className='registration-form' id='registration-form'>
				<div className='form-group'>
					<label htmlFor='email'>
						<i class='zmdi zmdi-email material-icons-name'></i>
					</label>
					<input
						type='email'
						name='email'
						id='email'
						autoComplete='off'
						placeholder='Your Email'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='password'>
						<i class='zmdi zmdi-lock material-icons-name'></i>
					</label>
					<input
						type='password'
						name='password'
						id='password'
						autoComplete='off'
						placeholder='Your Password'
					/>
				</div>

				<div className='form-group form-button'>
					<input
						type='submit'
						name='signin'
						id='signin'
						className='form-submit'
						value='login'
					/>
				</div>
			</form>
		</>
	);
}
