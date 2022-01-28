import React, { useEffect, useState } from "react";

export default function Contact() {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const userContact = async () => {
		try {
			const res = await fetch("/getdata", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			console.log(data);
			setUserData({
				...userData,
				name: data.name,
				email: data.email,
				phone: data.phone,
			});

			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		userContact();
	}, []);

	// Store data in states
	const handleInputs = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserData({ ...userData, [name]: value });
	};

	// sEnd message data to backend
	const ContactForm = async (e) => {
		e.preventDefault();

		const { name, email, phone, message } = userData;

		const res = await fetch("/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				message,
			}),
		});

		const data = await res.json();

		if (!data) {
			console.log("Message Failed");
		} else {
			alert("Message Successfully Send :)");
			setUserData({ ...userData, message: "" });
		}
	};

	return (
		<>
			<div className='contact-info'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
							<div className='contact-info-item d-flex justify-content-start align-items-center'>
								<img src='' alt='p' />
								<div className='contact_info_content'>
									<div className='contact-info-title'>Phone</div>
									<div className='contact-info-text'>+91 912345678</div>
								</div>
							</div>

							<div className='contact-info-item d-flex justify-content-start align-items-center'>
								<img src='' alt='e' />
								<div className='contact_info_content'>
									<div className='contact-info-title'>Email</div>
									<div className='contact-info-text'>chocobueno@gmail.com</div>
								</div>
							</div>

							<div className='contact-info-item d-flex justify-content-start align-items-center'>
								<img src='' alt='a' />
								<div className='contact_info_content'>
									<div className='contact-info-title'>Address</div>
									<div className='contact-info-text'>12 Baga Beach</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact us form */}

			<div className='contact-form'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-10 offset-lg-1'>
							<div className='contact-form-container py-5'>
								<div className='contact-form-title'>Get in Touch</div>
								<form method='POST' id='contact-form'>
									<div className='contact-form-name d-flex justify-content-between align-items-between'>
										<input
											type='text'
											id='contact-form-name'
											className='contact-form-name input-field'
											name='name'
											value={userData.name}
											onChange={handleInputs}
											placeholder='Your name'
											required='true'
										/>
										<input
											type='email'
											id='contact-form-name'
											className='contact-form-name input-field'
											name='email'
											value={userData.email}
											onChange={handleInputs}
											placeholder='Your Email'
											required='true'
										/>
										<input
											type='number'
											id='contact-form-name'
											className='contact-form-name input-field'
											name='phone'
											value={userData.phone}
											onChange={handleInputs}
											placeholder='Your mobile number'
											required='true'
										/>
									</div>

									<div className='contact-form-text mt-5'>
										<textarea
											className='text-field contact-form-message'
											placeholder='Message'
											name='message'
											value={userData.message}
											onChange={handleInputs}
											cols='30'
											rows='10'
										></textarea>
									</div>

									<div className='contact-form-button'>
										<button
											type='submit'
											className='button contact-submit-button'
											onClick={ContactForm}
										>
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
