import React from 'react'
import '../styles/project.scss'

// Components
import Button from '../components/Button'
import { Zoom } from 'react-reveal'

const Project = ({ title, description, stack, live, code, btnLive, btnSource, imgSrc, imgAlt }) => (
    <div className="project__container">
        <Zoom duration={1000} delay={600} >
            <div className="project__description__container">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{stack}</p>
                <div className="project__button__container">
                    {
                        live ?
                            <Button
                                styleClass="btn__primary"
                                link={live}
                                target="_blank"
                            >
                                {btnLive}
                            </Button> : null
                    }
                    {
                        code ?
                            <Button
                                styleClass="btn__tertiary"
                                link={code}
                                target="_blank"
                            >
                                {btnSource}
                            </Button> : null
                    }
                </div>
            </div>
        </Zoom>
        <Zoom duration={1000} delay={600}>
            <div className="project__image__container">
                <img src={imgSrc} alt="Project" />
            </div>
        </Zoom>
    </div>
)

export default Project