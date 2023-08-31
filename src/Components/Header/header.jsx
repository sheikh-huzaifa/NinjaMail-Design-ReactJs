import React from 'react'
import PropTypes from 'prop-types'
import NinjaMailLogo from '../../Assects/img/NinjaMailLogo.png'


const header = props => {
  return (
    <nav className="container nav_head">
          <nav className="navbar navbar-expand-lg row-lg ">
            <div className=" container pt-5">
              <div className="text-center "><img src={NinjaMailLogo} alt="Logo"  className="special_img"/></div>
                
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">≡</span> 
              </button>
              <div className="collapse navbar-collapse offset-md-4" id="navbarNav">
                <ul className="navbar-nav anchor">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Partners</a>
                  </li>
                  
                </ul>
                <button className="button_bg_green" >Sign Up Free</button>
              </div>
              <button className="button_bg_green special_btn" >Sign Up Free</button>
            </div>
          </nav>
        </nav>
  )
}

header.propTypes = {}

export default header