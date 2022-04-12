import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Head = () => {
    return (
        <header >
            <Link to="/">
                <h3>Jonathan Rovner Portfolio</h3>
            </Link>
            <Navbar />
           
        </header>
        );
}

export default Head;
