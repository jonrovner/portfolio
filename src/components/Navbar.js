import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <Link to='/about'>About</Link>           
        <Link to='/projects'>Projects</Link> 
        <a href="mailto:jonrovner@gmail.com"><button>Lets work!</button></a>          
        </nav>
    );
}

export default Navbar;
