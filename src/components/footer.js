import React from 'react'
import dataSocials from '../data/data_socials';
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="go-to-top">
          <Link to="header" smooth duration={1000}>
            <FaAngleUp />
          </Link>
        </div>
        <div className="social-icons">
          {
            dataSocials.map((social, i) => (
              <a key={i} href={social.link} target="_blank">
                <div>{social.icon}</div>
              </a>
            ))
          }
        </div>
        <hr />
        <p>{new Date().getFullYear()} - Riste Spasov</p>
      </div>
    </div>
  )
}

export default Footer;