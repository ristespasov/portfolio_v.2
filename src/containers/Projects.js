import React, { useContext } from 'react'

// Data
import projectsData from '../data/data_projects'

// Components
import Title from '../components/Title'
import Project from '../components/Project'
import { Fade } from 'react-reveal'

// Context
import Context from '../context/context'

const Projects = () => {
    const { t } = useContext(Context);

    return (
        <div id="projects">
            <Fade bottom duration={1000} delay={600} distance="30px">
                <Title styleClass="title__default">{t(projectsData.section_title)}</Title>
            </Fade>
            <div className="container">
                {
                    projectsData.projects.map((project, i) => (
                        <Project
                            key={i}
                            title={project.title}
                            description={t(project.description)}
                            stack={project.stack}
                            live={project.live}
                            btnLive={t(project.btn_live)}
                            code={project.code}
                            btnSource={t(project.btn_source)}
                            imgSrc={project.image}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Projects