import React, { useState } from 'react';
import {Link,useLocation} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


 const NavBar = ()=> {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
        return (
			<header id="header" id="home" className='nav-color text-white ' >
			<div class="container main-menu">
				<div class="row align-items-center justify-content-between d-flex">
				  <div id="logo">
					<a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
				  </div>
				  <Navbar className='nav-color text-white'  fixed  expand="md" >
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto text-white" navbar>
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

          <NavItem className="navbar-item text-white" active={useLocation().pathname === '/Admin'}>
          <NavLink className='text-white' tag={Link} to="/Admin">Admin</NavLink>                     
          </NavItem>
            
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