import React, { useContext } from 'react'

// Data
import dataContact from "../data/data_contact"

// Components
import Title from '../components/Title'
import Button from '../components/Button'
import { Fade } from 'react-reveal'

// Context
import Context from '../context/context'

const Contact = () => {
  const { t } = useContext(Context);

  return (
    <div id="contact">
      <div className="container">
        <Fade top duration={1000} delay={600} distance="30px">
          <Title>{t(dataContact.section_title)}</Title>
        </Fade>
        <Fade left duration={1000} delay={600} distance="30px">
          <div className="proposal">{t(dataContact.paragraph)}</div>
        </Fade>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <Button
            styleClass="btn--secondary"
            link={dataContact.mailto}
          >
            {t(dataContact.btn_email)}
          </Button>
        </Fade>
      </div>
    </div>
  )
}

export default Contact