import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { startLogout } from '../actions/authAction';

const id = 5;

const Header = ({ startLogout }) => (

    <div className="headerblock">
        <div className="header">

            <h1>React Form with redux </h1>
            <h2>why we need this rubbush?</h2>
            <button onClick={startLogout} className="button">Logout</button>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to="/"> React-Bootstrap</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey="/">
                        <NavItem>

                            <NavLink to="/" className="nav-link" exact>form</NavLink>

                        </NavItem>


                        <NavItem>

                            <NavLink to='/about' className="nav-link">about</NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink to={`/help/${id}`} className="nav-link">help</NavLink>

                        </NavItem>

                        <NavItem>
                            <NavLink to='/firebase' className="nav-link">firebase</NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink to='/firebasequery' className="nav-link">firebasequery</NavLink>

                        </NavItem>

                        <NavItem>
                            <NavLink to='/restAPI' className="nav-link">RestAPI</NavLink>

                        </NavItem>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavItem>
                                <NavLink to='/firebasequery' className="nav-link">firebasequery</NavLink>

                            </NavItem>

                            <NavItem>
                                <NavLink to={`/help/${id}`} className="nav-link">help</NavLink>

                            </NavItem>

                        </NavDropdown>


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>

    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);


/*
// react-bootstrap



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