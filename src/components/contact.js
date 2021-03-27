import React, { useContext } from 'react'
import dataContact from "../data/data_contact"
import { Fade } from 'react-reveal'

// Context
import Context from '../context/context'

const Contact = () => {
  const { t } = useContext(Context);

  return (
    <div id="contact">
      <div className="container">
        <Fade top duration={1000} delay={600} distance="30px">
          <div className="section-title">{t(dataContact.section_title)}</div>
        </Fade>
        <Fade left duration={1000} delay={600} distance="30px">
          <div className="proposal">{t(dataContact.paragraph)}</div>
        </Fade>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="btn-primary">
            <a href="mailto:ristespasov@hotmail.com"><span className="">{t(dataContact.btn_email)}</span></a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact