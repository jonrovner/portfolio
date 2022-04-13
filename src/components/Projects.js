import React from 'react';
import projects from './data';

const Projects = () => {
    return (
        <>
        <div className='projects'>
            <h2>Featured Project</h2>
            <div className='project'>

                <div className='projectHead'>
                    <div className='title'>
                        <img src={projects[0].logo} alt="logo"/>
                    </div>
                    <div className='description'>
                        <p>{projects[0].description}</p>
                    </div>
                </div>
                <div className='projectImage'>
                    <img src={projects[0].image} alt='canchera'/>
                </div>
                <div className='links'>
                    <p><a href={projects[0].deploy} target='_blank' rel="noreferrer">deploy</a> </p>
                    <p><a href={projects[0].code} target='_blank' rel="noreferrer">code</a></p>
                </div>



            </div>
        </div>      
        <div className='otherProjects'>

            <div className='project'>
                <div className='projectHead'>
                    <div className='title'>
                        <img src={projects[1].logo} alt="logo"/>
                    </div>
                    <div className='description'>
                        <p>{projects[1].description}</p>
                    </div>
                </div>

                <div className='links'>
                    <p><a href={projects[1].deploy} target='_blank' rel="noreferrer">demo</a> </p>
                    <p><a href={projects[1].code} target='_blank' rel="noreferrer">code</a></p>
                </div>
            </div>
            
            <div className='project'>
                <div className='projectHead'>
                    <div className='title'>
                        <img src={projects[2].logo} alt="logo"/>
                    </div>
                    <div className='description'>
                    <p>{projects[2].description}</p>
                    </div>
                </div>
                <div className='links'>
                    <p><a href={projects[2].deploy} target='_blank' rel="noreferrer">demo</a> </p>
                    <p><a href={projects[2].code} target='_blank' rel="noreferrer">code</a></p>
                </div>
            </div>

        </div>


         </>   
       
    );
}

export default Projects;
