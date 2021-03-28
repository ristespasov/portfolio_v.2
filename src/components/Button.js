import React from 'react'
import PropTypes from 'prop-types'
import '../styles/button.scss'

const Button = ({ styleClass, children, link, target }) => (
    <div
        className={`btn ${styleClass}`}
    >
        <a
            to="about"
            href={link}
            target={target}
        >
            <span>
                {children}
            </span>
        </a>
    </div>
)

Button.propTypes = {
    styleClass: PropTypes.string,
    children: PropTypes.any.isRequired,
    link: PropTypes.string,
    target: PropTypes.string
}

Button.defaultProps = {
    styleClass: 'btn'
}

export default Button;