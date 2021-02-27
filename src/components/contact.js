import React from 'react'
import dataContact from "../data/data_contact"
import { Fade } from 'react-reveal'

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <Fade top duration={1000} delay={600} distance="30px">
          <div className="section-title">{dataContact.section_title}</div>
        </Fade>
        <Fade left duration={1000} delay={600} distance="30px">
          <p>{dataContact.paragraph}</p>
        </Fade>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="btn-primary">
            <a href="mailto:ristespasov@hotmail.com"><span className="">{dataContact.btn_email}</span></a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact