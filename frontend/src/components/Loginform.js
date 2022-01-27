import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loginform() {
	const history = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (e) => {
		e.preventDefault();
		const res = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await res.json();

		if (res.status === 400 || !data) {
			window.alert("Invalid Credential");
		} else {
			window.alert("Succefully Logged in");
			history("/");
		}
	};

	return (
		<>
			<form method='POST' className='registration-form' id='registration-form'>
				<div className='form-group'>
					<label htmlFor='email'>
						<i class='zmdi zmdi-email material-icons-name'></i>
					</label>
					<input
						type='email'
						name='email'
						id='email'
						autoComplete='off'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
						onClick={loginUser}
					/>
				</div>
			</form>
		</>
	);
}
