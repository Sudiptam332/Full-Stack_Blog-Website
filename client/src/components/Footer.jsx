import React from 'react'
import logo from '../img/logo.jpg'

const Footer = () => {
  return (
    <footer>
      <div className="footlogo">
        <img src={logo} alt="Logo" />
        <span>Blogers Area</span>
      </div>
        <span>
            <h5>@ Made By Sudipta Mondal</h5>
            <br />
            Email-ID : sudiptam332@gmail.com
        </span>
    </footer>
  )
}

export default Footer
