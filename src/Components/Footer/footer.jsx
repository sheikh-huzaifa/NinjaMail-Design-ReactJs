import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assects/img/NinjaMailLogo.png"

const footer = props => {
  return (
    <footer className="container">
      <div className="row my-5 ms-md-5">
        <div className="col-md-4 offset-lg-1">
          <img src={img} alt="" style={{width: "50%;"}}/>
          
        </div>
        <div className="col-5 col-md-4 col-lg-3">
          <div className="row">
            <div className="col-md"> 
              <p className="fw-bold">Features <br/> Pricing <br/> Services <br/> Partners</p>
            </div>
            <div className="col-md">
              <p className="fw-bold">About Us <br/> Tutorials <br/> Resources <br/> Help Center <br/> Templates <br/> Case Studies</p>
            </div>
          </div>
        </div>
        <div className="col-5 col-md-4 col-lg-3">
          <div className="row">
            <div className="col-md"> 
              <p className="fw-bold">Medium <br/> Twiter <br/> Facebook <br/> Instagram <br/> LinkdIn </p>
            </div>
            <div className="col-md">
              <p className="fw-bold">Contact Us <br/>Slacks <br/>Jobs</p>
            </div>
          </div>
        </div>
        
      </div>

      <hr className=""/>

      <div className="row my-4 ms-md-5">
        <div className="col-md-7 offset-lg-1 ">
          <p className="text-break fw-bold">NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</p>
        </div>
        <div className="col">
          <p className="text-break fw-bold">Terms & Conditions &emsp; &emsp;
            Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

footer.propTypes = {}

export default footer