import React from 'react';
//import { NavLink } from 'react-router-dom';

import { Navbar, Nav} from 'react-bootstrap';
const id = 5;

const Header = () => (

    <div className="headerblock">
        <div className="header">

            <h1>React Form with redux </h1>
            <h2>why we need this rubbush?</h2>
         
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" >React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" activeClassName="is-active">Form</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                    <Nav.Link href={`/help/${id}`}>help</Nav.Link>
                    <Nav.Link href="/firebase">firebase</Nav.Link>
                    <Nav.Link href="/firebasequery">firebasequery</Nav.Link>
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

*/