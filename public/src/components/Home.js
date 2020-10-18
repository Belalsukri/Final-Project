import React,{useEffect} from 'react'
import Bounce from 'react-reveal/Bounce';

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

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
						
							<h1>
								Improved <br/>
								Production level <br/>
								with Robotics			
							</h1>
							
							<p className="text-white text-uppercase">
								Everyone wants the innovation through robotics
							</p>
							<a href="#" className="primary-btn header-btn text-uppercase">View Details</a>
						</div>
						</Fade>
						<Bounce right>
						<div className="banner-img col-lg-6 col-md-6">
							<img className="img-fluid" src="img/banner-img.png" alt=""/>
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
									<img src="img/p1.png" alt=""/>
								</div>
								<div className="details">
									<h4>The Upper Eye</h4>
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
						<div className="col-lg-6 home-about-left no-padding">
							<img className="mx-auto d-block img-fluid" src="img/about-img.png" alt=""/>
						</div>
						</Fade>
						<Fade right>
						<div className="col-lg-6 home-about-right no-padding">
							<h1>Globally Connected <br/>
							by Large Network</h1>
							<h5>
								We are here to listen from you deliver exellence
							</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
							</p>
							<a className="primary-btn text-uppercase" href="#">Get Details</a>
						</div>
						</Fade>
					</div>
				</div>	
			</section>
            <section className="about-video-area section-gap">
				<div className="container">
					<div className="row align-items-center">
					<Roll left>  
						<div className="col-lg-6 about-video-left">
							<h6 className="text-uppercase">Brand new app to blow your mind</h6>
							<h1>
								We’ve made a life <br/>
								that will change you 
							</h1>
							<p>
								<span>We are here to listen from you deliver exellence</span>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<a className="primary-btn" href="#">Get Started Now</a>
						</div>
						</Roll>
						<Roll right>
						<div className="col-lg-6 about-video-right justify-content-center align-items-center d-flex relative">
							<div className="overlay overlay-bg"></div>
							<a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM"><img className="img-fluid mx-auto" src="img/play-btn.png" alt=""/></a>
						</div>
						</Roll>
					</div>
				</div>	
			</section>


            <section className="feature-area section-gap">
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
								<a href="#" className="title d-flex flex-row">
									<span className="lnr lnr-user"></span>
									<h4>Expert Technicians</h4>
								</a>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a href="#" className="title d-flex flex-row">
									<span className="lnr lnr-license"></span>
									<h4>Professional Service</h4>
								</a>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a href="#" className="title d-flex flex-row">
									<span className="lnr lnr-phone"></span>
									<h4>Great Support</h4>
								</a>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>						
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a href="#" className="title d-flex flex-row">
									<span className="lnr lnr-rocket"></span>
									<h4>Technical Skills</h4>
								</a>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a href="#" className="title d-flex flex-row">
									<span className="lnr lnr-diamond"></span>
									<h4>Highly Recomended</h4>
								</a>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								<a href="#" className="title d-flex flex-row">
									<span className="lnr lnr-bubble"></span>
									<h4>Positive Reviews</h4>
								</a>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>	

					</div>
				</div>	
			</section>


           <section className="brand-area pt-120">
				<div className="container">
					<div className="row align-items-center">
						<div className="col single-brand">
							<img className="img-fluid" src="img/l1.png" alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src="img/l2.png" alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src="img/l3.png" alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src="img/l4.png" alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src="img/l5.png" alt=""/>
						</div>
					</div>
				</div>	
			</section>


           <section className="blog-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Latest News from our Blog</h1>
							<p>
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>						
					<div className="row">
						<div className="col-lg-6 col-md-6 blog-left">
							<div className="thumb">
								<img className="img-fluid" src="img/b1.jpg" alt=""/>
							</div>
							<div className="detais">
								<ul className="tags">
									<li><a href="#">Travel</a></li>
									<li><a href="#">Life Style</a></li>
								</ul>
								<a href="#"><h4>Portable latest Fashion for young women</h4></a>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
								</p>
								<p className="date">31st January, 2018</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 blog-right">
							<div className="thumb">
								<img className="img-fluid" src="img/b2.jpg" alt=""/>
							</div>
							<div className="detais">
								<ul className="tags">
									<li><a href="#">Travel</a></li>
									<li><a href="#">Life Style</a></li>
								</ul>
								<a href="#"><h4>Portable latest Fashion for young women</h4></a>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
								</p>
								<p className="date">31st January, 2018</p>
							</div>							
						</div>
					</div>
				</div>	
			</section>
            
         </React.Fragment>
        
    )
}
export default Home