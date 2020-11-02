import React from 'react'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'

 const  Footer=()=> {
   
        return (
            <React.Fragment>
           		<footer className="footer-area section-gap fot mt-1">
				    <div className="container">
				        <div className="row">
				          <div className="col">
				            <div className="col-lg-12">
				                <ul className="list-inline  ">
				                    <li className=" text-muted link-hover">
				                        <Link  className='link-hover ' to="/">Home</Link>
				                    </li>
				                    <li  className="mt-3 text-muted link-hover">
				                        <Link  className='link-hover' to="/About">About</Link>
				                    </li>
									<li  className="mt-3 text-muted link-hover">
				                        <Link  className='link-hover' to="/Services">Service</Link>
				                    </li>
				                    <li  className="mt-3  text-muted link-hover ">
				                        <Link className='link-hover' to="/Contact">Contact</Link>
				                    </li>
				                </ul>
				                <p className="copyright text-muted small mt-5">BogyRobots &copy;  Web Design  2020. All Rights Reserved</p>
				            </div>
				          </div>
				          <div className="col">
				              <div className="col-md-12" >
				                <h4 className=" fotrss text-primary">BogyRobots </h4>
				                <p className="text-monospace fotrss"> Robotics programming and web Developer company</p>
				              </div>
				              <div className="col-md-12">
				                <h4 className="text-primary fotrss">Target </h4>
				                <p className="text-monospace fotrss">Facilitating communication between dealer and customer</p>
				              </div>
				          </div>
				          <div className="col ">
				            <div className="col text-center fotrs ">
				                <ul className="list-unstyled">
				                    <li className="col-12 row"><i className="fas fa-map-marker-alt fa-2x col-3 text-primary"></i>   <p className="col-9">Friedrich-Frank-Bogen 44</p>
				                        <p className="col-3 "></p> <p className="col-9 ">hamburg  21033</p>
				                    </li>
				                    <li className="col-12 mt-3 row "><i className="fas fa-phone fa-2x col-3 text-primary"></i>   <p className="col-9">01 629 664 219</p> 
									<p className="col-12 "></p>
				                    </li>
				                    <li className=" mt-4 col-12 row"><i className="fas fa-envelope fa-2x col-3 text-primary"></i>  
				                        <p className="col-9">robotcarnode@gmail.com</p>
				                    </li>
				                </ul>
				            </div>
				          </div>
				        </div>
				      </div>
				</footer>
        </React.Fragment>
        )
    
}
export default Footer