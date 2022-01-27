import React, { useEffect } from "react";
import girlpic from "../images/girl.png";
import { useNavigate } from "react-router-dom";

export default function About() {
	const history = useNavigate();

	const callAboutPage = async () => {
		try {
			const res = await fetch("/about", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();
			console.log(data);

			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			history("/login");
		}
	};

	useEffect(() => {
		callAboutPage();
	}, []);

	return (
		<>
			<div className='container emp-profile'>
				<form method='GET'>
					<div className='row'>
						<div className='col-md-4 girlpic'>
							<img src={girlpic} alt='Parul' />
						</div>

						<div className='col-md-6 '>
							<div className='profile-head'>
								<h5>Parul Surana</h5>
								<h6>Problem Solver</h6>
								<p className='profile-rating mt-3 mb-5'>
									Rankings: <span>1/10</span>
								</p>
								<ul className='nav nav-tabs' role='tablist'>
									<li className='nav-item'>
										<a
											className='nav-link active'
											id='home-tab'
											data-toggle='tab'
											href='#home'
											role='tab'
										>
											About
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link '
											id='progile-tab'
											data-toggle='tab'
											href='#profile'
											role='tab'
										>
											Profile
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-md-2'>
							<input
								type='text'
								className='profile-edit-btn'
								name='btnAddMore'
								value='Edit Profile'
							/>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-4'>
							<div className='profile-work'>
								<p> WORK LINK</p>
								<a
									href='https://www.instagram.com/jain__parul/'
									target='_parul'
								>
									Insta
								</a>{" "}
								<br />
								<a
									href='https://www.linkedin.com/in/parulsurana/'
									target='_parul'
								>
									Linkedin
								</a>{" "}
								<br />
								<a href='https://github.com/parulsurana' target='_parul'>
									Github
								</a>{" "}
								<br />
								<a
									href='https://www.behance.net/suranaparu671d'
									target='_parul'
								>
									Behance
								</a>{" "}
								<br />
								<a
									href='https://mail.google.com/mail/u/0/#inbox'
									target='_parul'
								>
									Gmail
								</a>{" "}
								<br />
							</div>
						</div>

						<div className='col-md-8 pl-5 about-info'>
							<div className='tab-content profile-tab mt-5' id='myTabContent'>
								<div
									className='tab-pane fade show active'
									id='home'
									role='tabpanel'
									aria-labelledby='home-tab'
								>
									<div className='row'>
										<div className='col-md-6'>
											<label>User ID</label>
										</div>
										<div className='col-md-6'>
											<p>123456678</p>
										</div>
									</div>

									<div className='row mt-3'>
										<div className='col-md-6'>
											<label>Name</label>
										</div>
										<div className='col-md-6'>
											<p>Parul Surana</p>
										</div>
									</div>

									<div className='row mt-3'>
										<div className='col-md-6'>
											<label>Email</label>
										</div>
										<div className='col-md-6'>
											<p>suranaparul2@gmail.com</p>
										</div>
									</div>

									<div className='row mt-3'>
										<div className='col-md-6'>
											<label>Phone</label>
										</div>
										<div className='col-md-6'>
											<p>9187652348</p>
										</div>
									</div>

									<div className='row mt-3'>
										<div className='col-md-6'>
											<label>Profession</label>
										</div>
										<div className='col-md-6'>
											<p>Software Engineer</p>
										</div>
									</div>
								</div>

								<div
									className='tab-pane fade'
									id='profile'
									role='tabpanel'
									aria-labelledby='profile-tab'
								>
									<div className='row'>
										<div className='col-md-6'>
											<label>Experience</label>
										</div>
										<div className='col-md-6'>
											<p>Expert</p>
										</div>
									</div>

									<div className='row mt-3'>
										<div className='col-md-6'>
											<label>Hour Rate</label>
										</div>
										<div className='col-md-6'>
											<p>10$/hr</p>
										</div>
									</div>

									<div className='row mt-3'>
										<div className='col-md-6'>
											<label>Total Projects</label>
										</div>
										<div className='col-md-6'>
											<p>5</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
