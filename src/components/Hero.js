import React, {useEffect} from 'react';
import './hero.css'
import { typeSentence} from '../utils.js'


const Hero = () => {
    useEffect( ()=>{
        setTimeout(()=>{typeSentence("Full-Stack Web developer", "title", 150)}, 2200)

    
    }, [])
    
    return (
        <section id="hero">
            <div id="title"></div>
          
        </section> 
    );
}

export default Hero;
