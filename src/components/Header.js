import React from 'react';
import { NavLink } from 'react-router-dom';
const id = 5 ;

const Header = () => (

    <div>

        <h1>React Form with redux </h1>
        <h2>why we need this rubbush?</h2>
        <NavLink to="/" activeClassName="is-active" >form</NavLink> || 
        <NavLink to="/about">about</NavLink> || 
        <NavLink to={`/help/${id}`}>help</NavLink> || 
        <NavLink to="/firebase">Firebase</NavLink> || 
        <NavLink to="/firebasequery">Firebase - Query</NavLink>
    </div>
);

export default Header;