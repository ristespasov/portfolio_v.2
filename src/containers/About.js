import React, { useContext } from 'react'

// Data
import dataAbout from '../data/data_about'

// Components
import Title from '../components/Title'
import { Fade } from 'react-reveal'

// Context
import Context from '../context/context'

const About = () => {
  const { t } = useContext(Context);

  return (
    <div id="about">
      <Fade bottom duration={1000} delay={600} distance="30px">
        <Title>{t(dataAbout.section_title)}</Title>
      </Fade>
      <div className="container">
        <div className="about__text">
          <div className="about__description">
            {
              dataAbout.text_paragraphs.map((p, i) => (
                <Fade key={i} right duration={1000} delay={600} distance="30px">
                  <div>{t(p.paragraph)}</div>
                </Fade>
              ))
            }
          </div>
          <div className="tech__list">
            {
              dataAbout.tech_paragraphs.map((p, i) => (
                <Fade key={i} right duration={1000} delay={600} distance="30px">
                  <div>&#8226; {p}</div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About