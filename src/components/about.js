import React from 'react'
import dataAbout from '../data/data_about'
import { Fade } from 'react-reveal'

const About = () => {
  return (
    <div id="about">
      <Fade bottom duration={1000} delay={600} distance="30px">
        <div className="section-title">{dataAbout.section_title}</div>
      </Fade>
      <div className="container">
        <Fade left duration={1000} delay={600} distance="30px">
          <div className="about-image">
            <img src={dataAbout.image} alt="Image" />
          </div>
        </Fade>
        <Fade right duration={1000} delay={600} distance="30px">
          <div className="about-text">
            <div className="about-description">
              {
                dataAbout.text_paragraphs.map((p, i) => (
                  <div key={i}>{p.paragraph}</div>
                ))
              }
            </div>
            <div className="tech-list">
              {
                dataAbout.tech_paragraphs.map((p, i) => (
                  <div key={i}>&#8226; {p}</div>
                ))
              }
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About