import React from 'react';

const Projects = () => {
    return (
        <div className='projects'>
            <h2>Featured Projects</h2>

            <div className='projectHead'>
                <div className='title'>
                    <img src='assets/canchera_logo.png' alt="logo"/>
                </div>
                <div className='description'>
                    <p>Canchera is a Single Page Application developed as the final project for Henry Bootcamp. I´s a football field booking application. I designed and developed the booking calendar and serveral components with ReactJS, </p>

                </div>

            </div>
            <div className='projectImage'>
                <img src='assets/canchera1.png' alt='canchera'/>

            </div>
        </div>
    );
}

export default Projects;
