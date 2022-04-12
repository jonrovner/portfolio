import React from 'react';

const Projects = () => {
    return (
        <div className='projects'>
            <h2>Featured Projects</h2>
            <div className='project'>

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
                <div className='links'>
                    <p><a href='https://canchera.vercel.app/' target='_blank' rel="noreferrer">demo</a> </p>
                    <p><a href='https://github.com/jonrovner/Canchera' target='_blank' rel="noreferrer">code</a></p>

                </div>



            </div>
            <div className='project'>

                <div className='projectHead'>
                    <div className='title'>
                        <img src='assets/countries_logo.png' alt="logo"/>
                    </div>
                    <div className='description'>
                        <p>Countries is a Single Page Application developed as an individual project for Henry Bootcamp. It has filtered search, controlled forms, and back-end with API and database</p>

                    </div>

                </div>
                <div className='projectImage'>
                    <img src='assets/countries1.png' alt='canchera'/>

                </div>
                <div className='links'>
                    <p><a href='https://canchera.vercel.app/' target='_blank' rel="noreferrer">demo</a> </p>
                    <p><a href='https://github.com/jonrovner/Canchera' target='_blank' rel="noreferrer">code</a></p>

                </div>



            </div>
            <div className='project'>

                <div className='projectHead'>
                    <div className='title'>
                        <img src='assets/antonia_logo.png' alt="logo"/>
                    </div>
                    <div className='description'>
                        <p>Muy Antoniadis is a Single Page Application developed as the final project for Henry Bootcamp. I´s a football field booking application. I designed and developed the booking calendar and serveral components with ReactJS, </p>

                    </div>

                </div>
                <div className='projectImage'>
                    <img src='assets/antonia1.png' alt='canchera'/>

                </div>
                <div className='links'>
                    <p><a href='https://canchera.vercel.app/' target='_blank' rel="noreferrer">demo</a> </p>
                    <p><a href='https://github.com/jonrovner/Canchera' target='_blank' rel="noreferrer">code</a></p>

                </div>



            </div>
        </div>
    );
}

export default Projects;
