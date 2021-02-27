import React from 'react'
import dataSocials from '../data/data_socials'
import { Link } from 'react-scroll'
import { Slide, Fade } from 'react-reveal'

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <Slide left duration={1000} delay={500}>
                    <div className="header-socials-container">
                        <div className="line"></div>
                        <div className="social-icons">
                            {
                                dataSocials.map((social, i) => (
                                    <a key={i} href={social.link} target="_blank">
                                        <div>{social.icon}</div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </Slide>
                <Fade left duration={1000} delay={500} distance="30px">
                    <div className="hero-text-container">
                        <div>Hi, my name is <span className="">Riste Spasov.</span></div>
                        <div>I am a <span className="text-color-main">Frontend developer</span></div>
                        <div>occasionally designer.</div>
                    </div>
                </Fade>
                <Fade bottom duration={1000} delay={500} distance="30px">
                    <div>
                        <div className="btn-primary">
                            <Link to="about" smooth duration={1000}>
                                <span className="text-color-main">Find out more</span>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Header