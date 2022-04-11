import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Head from './Head';

const Home = () => {
    return (
        <div className='home'>
          
           <Hero /> 
           <Projects />
        </div>
    );
}

export default Home;
