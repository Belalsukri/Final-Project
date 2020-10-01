import React, { useState } from 'react';
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
            <NavItem>
              <NavLink className='text-white' href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' href="/About">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' href="/Services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' href="/Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' href="/Register">Register</NavLink>
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