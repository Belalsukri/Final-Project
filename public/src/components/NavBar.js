import React, { useState } from 'react';
import {Link,useLocation} from 'react-router-dom'
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


 const NavBar = ()=> {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
        return (
			<header   className='nav-color text-white ' >
			<div class="container main-menu">
				<div class="row align-items-center justify-content-between d-flex">
				  <div >
					<a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
				  </div>
          
				  <Navbar className='nav-color text-white '  fixed  expand="md" >
          
         
       <NavbarToggler  id='mobile-nav-toggle' onClick={toggle}> <i className='lnr lnr-menu'></i></NavbarToggler>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto text-white " navbar>
          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/'}>
          <NavLink className='text-white' tag={Link} to="/">Home</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/About'}>
          <NavLink className='text-white' tag={Link} to="/About">ABOUT US</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/Services'}>
          <NavLink className='text-white' tag={Link} to="/Services">Services</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/Contact'}>
          <NavLink className='text-white' tag={Link} to="/Contact">Contact</NavLink>                     
          </NavItem>

          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/Login'}>
          <NavLink className='text-white' tag={Link} to="/Login">Login</NavLink>                     
          </NavItem>

          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/Register'}>
          <NavLink className='text-white' tag={Link} to="/Register">Register</NavLink>                     
          </NavItem>

          {/* <NavItem className="navbar-item text-white" active={useLocation().pathname === '/admin/AddRobot'}>
          <NavLink className='text-white' tag={Link} to="/Admin/AddRobot">Add Robot</NavLink>                     
          </NavItem>

          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/admin/Robots'}>
          <NavLink className='text-white' tag={Link} to="/Admin/Robots">Robots</NavLink>                     
          </NavItem>
            
          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/ControlPanal'}>
          <NavLink className='text-white' tag={Link} to="/ControlPanal">ControlPanal</NavLink>                     
          </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='text-white'>
                blog
              </DropdownToggle >
              <DropdownMenu right >
                <DropdownItem >
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
				</div>
			</div>
		  </header>
        )
    
}
export default NavBar