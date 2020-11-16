import React from 'react'
import {Link} from 'react-router-dom'
const Services=()=>{
    return(
<React.Fragment>
<section className="banner-area relative" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content-1 col-lg-12">
							<h1 className="text-white">
								Services				
							</h1>	
							<p className="text-white link-nav"><Link to="/">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/Services"> Services</Link></p>
						</div>	
					</div>
				</div>
			</section>
			
			<section className="home-about-area mt-3 ">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6 home-about-left no-padding feature-area mb-3">
							<img className="mx-auto d-block img-fluid mb-3" src="img/car4-removebg-preview.png" alt=""/>
						</div>
						<div className="col-lg-6 home-about-right no-padding">
							<h1>Robot with real-time camera communication</h1>
							<h5>
								We are here to listen from you deliver exellence
							</h5>
							<p>
							This robot works to facilitate real-time communication wherever you are, for example (monitoring your home from anywhere in the world), this is done through the global internet Network. We have worked on creating a browser to control the robot with the ability to control it via a mobile phone or computer.
							</p>
							
						</div>
					</div>
				</div>	
			</section>
			
			<section className="feature-area section-gap colr mb-3">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10 text-white">Some Features that Made us Unique</h1>
							<p className="text-white">
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>							
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a  className="title d-flex flex-row">
									<span className="lnr lnr-user"></span>
									<h4>Expert Technicians</h4>
								</a>
								<p>
									A distinguished team working on designing electronic websites and programming robots. Our developers deliver a test project to completion, demonstrating their skills across ideating, scoping, implementation, and problem-solving.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a  className="title d-flex flex-row">
									<span className="lnr lnr-license"></span>
									<h4>Professional Service</h4>
								</a>
								<p>
									This chapter summarizes new experiences with React for deploying professional service botnet applications in the real world. This includes a moving robot, a mobile manipulator for general purpose applications, and a self-guided mobile vehicle. 
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a  className="title d-flex flex-row">
									<span className="lnr lnr-phone"></span>
									<h4>Great Support</h4>
								</a>
								<p>									
									Our support associates are always ready to help. Our support, has high customer satisfaction ratings and fast response times.
									Access support anytime, directly from your Service Connect Anywhere via web browser.
								</p>
							</div>
						</div>						
						
							

					</div>
				</div>	
			</section>
</React.Fragment>
    )
}
export default Services