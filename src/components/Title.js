import React from 'react'
import PropTypes from 'prop-types'
import '../styles/title.scss'

const Title = ({ styleClass, children }) => (
    <div
        className={styleClass}
    >
        {children}
    </div>
)

Title.propTypes = {
    styleClass: PropTypes.string,
    children: PropTypes.string.isRequired
}

Title.defaultProps = {
    styleClass: 'title__default'
}

export default Title;