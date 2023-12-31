import React,{useState} from 'react'
import validator from 'validator'
import {senderPost} from '../services/api'
import {Link,useHistory} from 'react-router-dom'
const Contact=()=>{
    const initialState = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    
      const [myState, setMyState] = useState(initialState)
      const history =useHistory()
      const onSenderBtnClick = (e) => {
        e.preventDefault()
        if(myState.name === '' || myState.email.trim() === '' || myState.subject === '' || myState.message === '' || !validator.isEmail(myState.email.trim())) {
          const errorElement = (
            <ul>
                {myState.name === '' ? <li>Name should not be empty</li> : null}
                {myState.email.trim() === '' ? <li>Email should not be empty</li> : null}
                {!validator.isEmail(myState.email.trim()) ? <li>you have to enter a valid email</li> : null}
                {myState.subject === '' ? <li>Subject should not be empty</li> : null}
                {myState.message === '' ? <li>Message should not be empty</li> : null}
            </ul>
        )
        } else {
          senderPost(myState.name, myState.email, myState.subject, myState.message).then(data => {
            console.log(data);
            
          })
          history.push('/')
        }
      }
    

    return(
<React.Fragment>
<section className="banner-area relative" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content-1 col-lg-12">
							<h1 className="text-white">
                            Contact us				
							</h1>	
							<p className="text-white link-nav"><Link to="/">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/Contact"> Contact us</Link></p>
						</div>	
					</div>
				</div>
			</section>

<section className=" feature-area mt-5">
<div className='container mt-4 mb-5'> 
<h1 className="h1-responsive text-white text-center   mb-5">Contact us</h1>

<h4 className="text-center w-responsive text-white mx-auto mb-4 col-md 8">Do you have any Quistion ? Please don’t hesitate, to contact us directly. Our team will be in touch within a few hours to help you..</h4>

<div className="row ">

    
    <div className="col-md-8  mb-5 ">
        <form id="contact-form" name="contact-form" >

            <div className="row ">

               
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name"
                           placeholder="Enter your name *"
                         name="name" className="form-control fm"
                         onChange={(e) => {setMyState({...myState, name: e.target.value})}} />
                        <label for="name" className="text-white">Your name</label>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email"
                         placeholder="Enter email address *"
                         name="email" className="form-control fm"
                         onChange={(e) => {setMyState({...myState, email: e.target.value})}} />
                        <label for="email" className="text-white">Your email</label>
                    </div>
                </div>
              

            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject"
                        placeholder="Enter your subject *"
                         name="subject" className="form-control fm"
                         onChange={(e) => {setMyState({...myState, subject: e.target.value})}}/>
                        <label for="subject" className="text-white">Subject</label>
                    </div>
                </div>
            </div>
           
            <div className="row">

               
                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message"
                         rows="2" className="form-control md-textarea fm"
                         placeholder="Messege *"
                         onChange={(e) => {setMyState({...myState, message: e.target.value})}}></textarea>
                        <label className='text-white' for="message">Your message</label>
                    </div>

                </div>
            </div>
           

        </form>

        <div className="text-center text-md-left">
        <button className="genric-btn primary circle" onClick={onSenderBtnClick}>Send Message</button>
        </div>
        <div className="status"></div>
    </div>
   
    <div className="col-md-4 text-center   ">
        <ul className="list-unstyled mb-0 ">
            <li className='hof'><i className="fas fa-map-marker-alt fa-2x  list-inline  "></i>
                <p className=' '>Friedrich-Frank-Bogen 44</p>
                <p className=' '>hamburg  21033</p>
            </li>

            <li  className='hof'><i className="fas fa-phone mt-4 fa-2x  list-inline  "></i>
                <p className=' hof'> 01 629 664 219</p>
            </li>

            <li  className='hof'><i className="fas fa-envelope mt-4 fa-2x  list-inline "></i>
                <p className=' hof'>belalsukari@gmail.com</p>
            </li>
        </ul>
    </div>
    

</div>
<div className="container pt-2 ">
    <div className="row  ">
        <div className="list-inline col-sm-2 col-md-2   ">
            <li>
                <a href="#" target="_blank" className=" btn-lg colers"><i class="fab fa-facebook"></i> <span className="">Facebook</span></a>
            </li>
          </div>
      <div className="list-inline col-sm-2 col-md-2 ">
        <li>
            <a href="https://youtu.be/f10B0nnDNqo" target="_blank" className="  btn-lg colers"> <i className="fab fa-youtube"></i> <span className="network-name">YouTube</span></a>
        </li>
      </div>
      <div className="list-inline col-sm-2 col-md-2 ">
        <li>
            <a href="https://github.com/Belalsukri" target="_blank" className="  btn-lg colers"> <i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
        </li>
      </div>
      <div className="list-inline col-sm-2 col-md-2  ">
        <li>
            <a href="https://www.linkedin.com/in/thiagoferreir4" target="_blank" className="  btn-lg colers"> <i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
        </li>
      </div>
      
      


    </div>
</div>
</div>
</section>

</React.Fragment>
    )
}
export default Contact