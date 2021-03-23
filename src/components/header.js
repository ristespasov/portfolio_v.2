import React, { useContext } from 'react';
import dataSocials from '../data/data_socials'
import { Link } from 'react-scroll'
import { Slide, Fade, Zoom } from 'react-reveal'

// Context
import Context from '../context/context'

const Header = () => {
    const { t } = useContext(Context);

    return (
        <div id="header">
            <div className="container">
                <Slide left duration={1000} delay={500}>
                    <div className="header-socials-container">
                        <div className="line"></div>
                        <div className="social-icons">
                            {
                                dataSocials.map((social, i) => (
                                    <Zoom key={i} duration={1000} delay={1000}>
                                        <a href={social.link} target="_blank">
                                            <div>{social.icon}</div>
                                        </a>
                                    </Zoom>
                                ))
                            }
                        </div>
                    </div>
                </Slide>
                <Fade left duration={1000} delay={500} distance="30px">
                    <div className="hero-text-container">
                        <div>{t('Hi.1')} <span>Riste Spasov.</span></div>
                        <div>{t('Hi.2')} <span className="text-color-main">{t('Hi.3')}</span></div>
                        <div>{t('Hi.4')}</div>
                    </div>
                </Fade>
                <Fade bottom duration={1000} delay={500} distance="30px">
                    <div>
                        <div className="btn-primary">
                            <Link to="about" smooth duration={1000}>
                                <span className="text-color-main">{t('Hi.more')}</span>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Header