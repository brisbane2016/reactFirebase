import React from 'react';
import { NavLink } from 'react-router-dom';
const id = 5 ;

const Header = () => (

    <div>

        <h1>React Form with redux </h1>
        <p>why we need this rubbush?</p>
        <NavLink to="/" activeClassName="is-active" >form</NavLink> || 
        <NavLink to="/about">about</NavLink> || 
        <NavLink to={`/help/${id}`}>help</NavLink> || 
        <NavLink to="/firebase">Firebase</NavLink> || 
        <NavLink to="/firebasequery">Firebase - Query</NavLink>
    </div>
);

export default Header;