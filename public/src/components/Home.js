import React,{useEffect} from 'react'
import Bounce from 'react-reveal/Bounce';
import {Link} from 'react-router-dom'
import Iframe from 'react-iframe'
import ReactPlayer from 'react-player'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

const Home=()=>{
	useEffect(()=>{
	
	  },[])
    return(
        <React.Fragment>
           
           <section className="banner-area" id="home">
				<div className="container">
					<div className="row fullscreen d-flex align-items-center justify-content-center">
					<Fade left>
						<div className="banner-content col-lg-6 col-md-6">
						
							<h1 className='text-white text-uppercase'>
							A better future    <br/>
							and faster production  <br/>
							with smart robots		
							</h1>
						</div>
						</Fade>
						<Bounce right>
						<div className="banner-img col-lg-6 col-md-6">
							<img className="img-fluid" src="img/robot-run-removebg-preview.png" alt=""/>
						</div>	
         
       				    </Bounce>
																	
					</div>
				</div>
			</section>

			
           <section className="products-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Featured Robotics Products to Show</h1>
							<p>
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>	
					<Fade left>					
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
								<img class="img-fluid imgHome" src="img/car1.png" alt="Responsive image"/>

								</div>
								<div className="details">
									<h4>The Upper Eye</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									<a href="/CarRobot" className="primary-btn text-uppercase">View Details</a>
								</div>
							</div>
						</div>	
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src="img/p2.png" alt=""/>
								</div>
								<div className="details">
									<h4>The Crab Wheel</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									<a href="#" className="primary-btn text-uppercase">View Details</a>
								</div>
							</div>
						</div>	
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src="img/p3.png" alt=""/>
								</div>
								<div className="details">
									<h4>The Plug Ninja</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									<a href="#" className="primary-btn text-uppercase">View Details</a>
								</div>
							</div>
						</div>	
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src="img/p4.png" alt=""/>
								</div>
								<div className="details">
									<h4>The Controller</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									<a href="#" className="primary-btn text-uppercase">View Details</a>
								</div>
							</div>
						</div>																								
					</div>
					</Fade>
				</div>	
			</section>

			
            <section className="home-about-area">
				<div className="container-fluid">
					<div className="row align-items-center">
					<Fade left>	
						<div className="col-lg-6 home-about-left no-padding ">
						<ReactPlayer
						className="mx-auto d-block img-fluid video-width "
						controls={true}
    					playbackRate = {1}
						url="https://youtu.be/f10B0nnDNqo"/>
						</div>
						</Fade>
						<Fade right>
						<div className="col-lg-5 home-about-right no-padding ml-4">
							<h1>Globally Connected <br/>
							by Large Network</h1>
							<h5>
								We are here to listen from you deliver exellence
							</h5>
							<p>
							<h6>Trailer for our car robot:</h6>
							In this video, we are making a smaller video to show you how can a man control a 
							robot car through a mobil phone and how can do this easily

							</p>
							
						</div>
						</Fade>
					</div>
				</div>	
			</section>
            
			<div className='mar1'></div>

            <section className="feature-area section-gap colr ">
				<div className="container">
					<div className="row d-flex justify-content-center">
					<Zoom bottom> 
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10 text-white">Some Features that Made us Unique</h1>
							<p className="text-white">
								Who are in extremely love with eco friendly system.
							</p>
						</div>
						</Zoom>
					</div>							
					<div className="row">
					<Slide bottom big>
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
						</Slide>
						<Slide left big> 
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
						</Slide>
						<Slide top big>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a  className="title d-flex flex-row">
									<span className="lnr lnr-phone"></span>
									<h4>Great Support</h4>
								</a>
								<p>									
									Our support associates are always ready to help. Our support, including Live Chat, has high customer satisfaction ratings and fast response times.
									Access support anytime, directly from your Service Connect Anywhere via web browser.
								</p>
							</div>
						</div>						
						</Slide>
							

					</div>
				</div>	
			</section>


           <section className="brand-area pt-120">
				<div className="container ">
					<div className="row  align-items-center ">
					<div className="col-2 col-sm-1  single-brand col-lg-1 ml-5">
							
						</div>
						<div className="col-4 col-sm-2 single-brand ">
							<img className="img-fluid w-i" src="img/html5-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4  col-sm-2 single-brand">
							<img className="w-d img-fluid w-i" src="img/css-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4 col-sm-2 single-brand">
							<img className="img-fluid w-i" src="img/scss-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4 col-sm-2 single-brand">
							<img className="img-fluid w-i" src="img/Javascript-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4 col-sm-2  single-brand">
							<img className="img-fluid w-i" src="img/jquery-removebg-preview.png" alt=""/>
						</div>
						
						

					
						
						<div className="col-2 col-sm-1  single-brand col-lg-1 ml-5">
							
						</div>
						
						<div className="col-4 col-sm-2  single-brand">
							<img className="img-fluid w-i" src="img/node-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4 col-sm-2 single-brand">
							<img className="img-fluid w-i" src="img/mongo-db-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4 col-sm-2 single-brand">
							<img className="img-fluid w-i" src="img/mysql-removebg-preview.png" alt=""/>
						</div>
						<div className="col-4 col-sm-2 single-brand">
							<img className="img-fluid w-i" src="img/react-removebg-preview.png" alt=""/>
						</div>
						
						<div className="col-4 col-sm-2 single-brand">
							<img className="img-fluid w-i" src="img/bootsrap-removebg-preview.png" alt=""/>
						</div>
						

					</div>
				</div>	
			</section>


           <section className="blog-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Internet of Robotic Things – Robotics & Intelligence Evolving to Make the New Era
</h1>
							
						</div>
					</div>						
					<div className="row">
						
						<div className="col-lg-6 col-md-6 blog-right">
							<div className="thumb">
								<img className="img-fluid" src="img/IoT.jpg" alt=""/>
							</div>
							<div className="detais">
								<br/>
								<p className='mb-5'>
								Robot can be integrated as an entity in the Internet of Things (IoT) infrastructure thereby enabling
								 connections between different entities using diverse communication protocols

								</p>
								
							</div>							
						</div>
						<div className="col-lg-6 col-md-6 blog-left">
							<div className="thumb">
								<img className="img-fluid" src="img/Blog-post-image-800x340.jpg" alt=""/>
							</div>
							<div className="detais">
								<br/>
								<p>
								Gartner Survey Reveals 47% of Organizations Will Increase Investments in IoT Despite the Impact of COVID-19
								By 2023, One-Third of Companies That Have Implemented IoT Will Also Have Implemented AI in Conjunction With
								 at Least One IoT Project.

								</p>
								
							</div>
						</div>
					</div>
				</div>	
			</section>
            
         </React.Fragment>
        
    )
}
export default Home