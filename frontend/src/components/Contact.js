import React from "react";

export default function Contact() {
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
								<form id='contact-form'>
									<div className='contact-form-name d-flex justify-content-between align-items-between'>
										<input
											type='text'
											id='contact-form-name'
											className='contact-form-name input-field'
											placeholder='Your name'
											required='true'
										/>
										<input
											type='email'
											id='contact-form-name'
											className='contact-form-name input-field'
											placeholder='Your Email'
											required='true'
										/>
										<input
											type='number'
											id='contact-form-name'
											className='contact-form-name input-field'
											placeholder='Your mobile number'
											required='true'
										/>
									</div>

									<div className='contact-form-text mt-5'>
										<textarea
											className='text-field contact-form-message'
											placeholder='Message'
											cols='30'
											rows='10'
										></textarea>
									</div>

									<div className='contact-form-button'>
										<button
											type='submit'
											className='button contact-submit-button'
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
