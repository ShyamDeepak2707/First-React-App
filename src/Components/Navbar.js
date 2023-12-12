import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {



  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" style={{ marginLeft: '1rem' }} to="First-React-App/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link " to="First-React-App/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="First-React-App/about">{props.aboutText}</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`} id='hidden-mode' style={{ visibility: props.mode === 'light' ? 'hidden' : 'visible' }}>
          <input className="form-check-input" onClick={props.blackMode} role='button' type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" role='button' htmlFor="defaultCheck1">
            {props.blackText}
          </label>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-4`}>
          <input className="form-check-input" type="checkbox" style={{ cursor: 'pointer' }} onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" style={{ cursor: 'pointer' }} htmlFor="flexSwitchCheckDefault" id='dark-text'>{props.text}</label>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "TextUtlis",
  aboutText: "About"
}
