import React, { useContext } from 'react'
import projectsData from '../data/data_projects'
import { Fade, Zoom } from 'react-reveal'

// Context
import Context from '../context/context'

const Projects = () => {
    const { t } = useContext(Context);

    return (
        <div id="projects">
            <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="section-title">{t(projectsData.section_title)}</div>
            </Fade>
            <div className="container">
                {
                    projectsData.projects.map((project, i) => (
                        <div key={i} className="project-container">
                            <Zoom duration={1000} delay={600} >
                                <div className="project-description-container">
                                    <h3>{project.title}</h3>
                                    <p>{t(project.description)}</p>
                                    <p>{project.stack}</p>
                                    <div className="project-button-container">
                                        {
                                            project.live ?
                                                <div className="btn-primary">
                                                    <a href={project.live} target="_blank"><span className="text-color-main">{t(project.btn_live)}</span></a>
                                                </div> : null
                                        }
                                        {
                                            project.github ?
                                                <div className="btn-secondary">
                                                    <a href={project.github} target="_blank"><span className="text-color-main">{t(project.btn_source)}</span></a>
                                                </div> : null
                                        }
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom duration={1000} delay={600}>
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            </Zoom>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects