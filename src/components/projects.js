import React from 'react'
import projectsData from '../data/data_projects'
import { Fade } from 'react-reveal'

const Projects = () => {
    return (
        <div id="projects">
            <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="section-title">{projectsData.section_title}</div>
            </Fade>
            <div className="container">
                {
                    projectsData.projects.map((project, i) => (
                        <div key={i} className="project-container">
                            <Fade left duration={1000} delay={600} distance="30px">
                                <div className="project-description-container">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p>{project.stack}</p>
                                    <div className="project-button-container">
                                        {
                                            project.live ?
                                                <div className="btn-primary">
                                                    <a href={project.live} target="_blank"><span className="text-color-main">{project.btn_live}</span></a>
                                                </div> : null
                                        }
                                        {
                                            project.github ?
                                                <div className="btn-secondary">
                                                    <a href={project.github} target="_blank"><span className="text-color-main">{project.btn_source}</span></a>
                                                </div> : null
                                        }
                                    </div>
                                </div>
                            </Fade>
                            <Fade right duration={1000} delay={600} distance="30px">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            </Fade>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects