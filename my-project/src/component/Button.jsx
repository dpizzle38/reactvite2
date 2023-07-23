import React from 'react'
import PropTypes from 'prop-types'
import {FaArrowRight } from "react-icons/fa";

const Button = ({className, content}) => {
  return <button className = {`${className}`}>{content}<FaArrowRight /> </button>
    
  
};

Button.propTypes = {
  content : PropTypes.string.isRequired,
  className : PropTypes.string.isRequired
};

export default Button

