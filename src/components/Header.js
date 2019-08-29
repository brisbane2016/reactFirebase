import React from 'react';
import { NavLink,Link } from 'react-router-dom';

import { Navbar,Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
const id = 5;

const Header = () => (

    <div className="headerblock">
        <div className="header">

            <h1>React Form with redux </h1>
            <h2>why we need this rubbush?</h2>

        <Navbar bg="light" expand="lg">

            <Navbar.Brand>
                <NavLink to ="/"> React-Bootstrap</NavLink>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                   
                        <Nav.Link> <NavLink to="/">Form   </NavLink></Nav.Link>
                 
                   
                        <Nav.Link> <NavLink to="/about">about</NavLink></Nav.Link>
                    
                   
          
                        <Nav.Link> <NavLink to={`/help/${id}`}>Help     </NavLink></Nav.Link>
               

                  
                        <Nav.Link> <NavLink to="/firebase">firebase</NavLink></Nav.Link> 
                        <Nav.Link> <NavLink to="/firebasequery">firebasequery</NavLink></Nav.Link> 
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </div>
    



    </div>
);

export default Header;


/*
<NavLink to="/" activeClassName="is-active" >form</NavLink> ||
<NavLink to="/about">about</NavLink> ||
<NavLink to={`/help/${id}`}>help</NavLink> ||
<NavLink to="/firebase">Firebase</NavLink> ||
<NavLink to="/firebasequery">Firebase - Query</NavLink>



                    <Nav.Link href="/" >Form</Nav.Link>
                    <Nav.Link tag={NavLink} to="/about">about</Nav.Link>
                    <Nav.Link href={`/help/${id}`}>help</Nav.Link>
                    <Nav.Link href="/firebase">firebase</Nav.Link>
                    <Nav.Link href="/firebasequery">firebasequery</Nav.Link>
*/