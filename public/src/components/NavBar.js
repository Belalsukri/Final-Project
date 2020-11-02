import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import {Link,useLocation,useHistory} from 'react-router-dom'

import {connect} from 'react-redux'
import {logoutPost} from '../services/api'
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

 const NavBar = (props)=> {
 
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const history =useHistory()
 // console.log(history.location.state);
  const toggle = () => setIsOpen(!isOpen);
  
  

 // console.log(history);
  const logotBtnClik=(e)=>{
    e.preventDefault()
    logoutPost().then(data=>{
      if (data===10) {
        history.push('/login')
      } else {
        
      }
    })
   }
   let currentLocation =history.location.pathname
  // console.log(history);
        return (
			<header   className='nav-color text-white ' >
			<div className="container main-menu">
				<div className="row align-items-center justify-content-between d-flex">
        <Fade top big>
          <div >
					<a href="/"><img src="img/logo.png" alt="" title="" /></a>
				  </div>
          </Fade>
          <Rotate top left>
				  <Navbar className='nav-color text-white button'  fixed=''  expand="md" >
          
         
       <NavbarToggler  id='mobile-nav-toggle' onClick={toggle}> <i className='lnr lnr-menu'></i></NavbarToggler>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto text-white  " >
          <NavItem className="navbar-item text-white b-green " active={currentLocation === '/'}>
          <NavLink className='text-white ' tag={Link} to="/">Home</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white b-green" active={currentLocation === '/About'}>
          <NavLink className='text-white ' tag={Link} to="/About">ABOUT US</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white b-green" active={currentLocation === '/Services'}>
          <NavLink className='text-white ' tag={Link} to="/Services">Services</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white b-green" active={currentLocation === '/Contact'}>
          <NavLink className='text-white ' tag={Link} to="/Contact">Contact</NavLink>                     
          </NavItem>
          {  props.user  ?
             <React.Fragment  >
             <NavItem className="text-white navbar-item b-green"  >
             <NavLink   className='text-white' href="#" onClick={logotBtnClik}>Logout</NavLink>
             </NavItem>
             <NavItem className="text-white navbar-item b-green" active={currentLocation === '/Admin'} >
             <NavLink  className='text-white ' tag={Link} to="/Admin">Dashboard</NavLink>
             </NavItem>
             </React.Fragment>
                  :
                  <React.Fragment>
             <NavItem className="navbar-item text-white b-green"  active={currentLocation === '/Login'} >
             <NavLink className='text-white ' tag={Link} to="/Login">Login</NavLink>                     
             </NavItem>
   
             <NavItem className="navbar-item text-white b-green"  active={currentLocation === '/Register'} >
             <NavLink className='text-white ' tag={Link} to="/Register">Register</NavLink>                     
             </NavItem>
             </React.Fragment>
            }            
         
            
          </Nav>
         
        </Collapse>
      </Navbar>
      </Rotate>
				</div>
			</div>
		  </header>
        )
    
}

const mapStateToProps =(state)=>{
  return({
      user:state.user
  })
}
export default connect(mapStateToProps)(NavBar) 