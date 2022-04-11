import React, {useEffect} from 'react';
import { typeSentence} from '../utils.js'


const Hero = () => {
    useEffect( ()=>{
        setTimeout(()=>{typeSentence("Full-Stack Web developer", "title", 50)}, 2200)
        setTimeout(()=>{typeSentence("I create responsive front-ends, realiable APIs and Databases", "subtitle", 10)}, 3500)
    }, [])
    
    return (
        <section id="hero">
            <div id="heroTitle">
                <div id="title"></div>
                <div id="subtitle"></div>       
            </div>
            <div id="features">
                <div className='feature' id='responsive'>
                    <img src='responsiveIcon.png' alt="responsive icon"/>
                    <h3>Front-end development</h3>
                    <p>Responsive websites and SPAs with optimal user experience</p>
                </div>
                <div className='feature' id='server'>
                    <img src='server.png' alt="server icon"/>
                    <h3>Servers and APIs</h3>
                    <p>Reliable back-end developed for scalability and performnance</p>

                </div>
                <div className='feature' id='database'>
                <img src='database.png' alt="database icon"/>
                    <h3>Database development</h3>
                    <p>Well structured efficient databases for data persistence</p>

                </div>
            </div> 
        </section> 
    );
}

export default Hero;
