import React from 'react'
//import {Link} from 'react-router-dom'

 const  Footer=()=> {
   
        return (
            <React.Fragment>
           		<footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<div className="single-footer-widget">
								<h6>Top Products</h6>
								<ul className="footer-nav">
									
								</ul>
							</div>
						</div>
						<div className="col-lg-6  col-md-12">
							<div className="single-footer-widget newsletter">
								<h6>Newsletter</h6>
								<p>You can trust us. we only send promo offers, not a single spam.</p>
								<div id="mc_embed_signup">
									
								</div>		
							</div>
						</div>
						<div className="col-lg-3  col-md-12">
							<div className="single-footer-widget mail-chimp">
								<h6 className="mb-20">Instragram Feed</h6>
								<ul className="instafeed d-flex flex-wrap">
									<li><img src="img/i1.jpg" alt=""/></li>
									<li><img src="img/i2.jpg" alt=""/></li>
									<li><img src="img/i3.jpg" alt=""/></li>
									<li><img src="img/i4.jpg" alt=""/></li>
									<li><img src="img/i5.jpg" alt=""/></li>
									<li><img src="img/i6.jpg" alt=""/></li>
									<li><img src="img/i7.jpg" alt=""/></li>
									<li><img src="img/i8.jpg" alt=""/></li>
								</ul>
							</div>
						</div>						
					</div>

					<div className="row footer-bottom d-flex justify-content-between">
						<p className="col-lg-8 col-sm-12 footer-text m-0 text-white">
Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
						<div className="col-lg-4 col-sm-12 footer-social">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-dribbble"></i></a>
							<a href="#"><i className="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</footer>
        </React.Fragment>
        )
    
}
export default Footer