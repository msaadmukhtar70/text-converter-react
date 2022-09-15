import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(prop){
    return(
      <nav className="navbar bg-primary bg-gradient h-25">
      <div className="container d-flex justify-content-center">
        <span className="navbar-brand mb-0 h1  text-light ">Text Converter</span>
      </div>
    </nav>
    )
}
Navbar.propTypes = {
  title: PropTypes.string
};