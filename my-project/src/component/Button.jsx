import React from 'react'
import PropTypes from 'prop-types'

const Button = ({className, content}) => {
  return <button className = {`${className}`}>{content}</button>
    
  
};

Button.propTypes = {
  content : PropTypes.string.isRequired,
  className : PropTypes.string.isRequired
};

export default Button

