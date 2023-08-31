import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../../Assects/img/person_1.png"
import img2 from "../../../Assects/img/person2.png"
import img3 from "../../../Assects/img/person3.png"


const style1 = { 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",  
    maxWidth: '22rem'
}


const section3 = props => {
  return (
    <div className="container mt-5 mb-5  ">
          <div className="row pt-5 d-md-flex justify-content-between align-items-center mx-4 mx-md-0 ">
            <div className="card col-md-3  me-4 offset-lg-1 mb-3 mt-5" style= { {...style1, backgroundImage: `url(${img1})`}}>
              
            
              <div className="card-footer mt-3">
                <h1 className="fs-3 mt-5 pt-5 text-white">Frankie</h1>
                <p className="text-white">Member Since 2016</p>
              </div>
            </div>

            <div className="card col-md-3 mx-lg-4 mt-5 mb-3" style={{...style1 ,backgroundImage: `url(${img2})`}}>
              
            
              <div className="card-footer mt-3">
                <h1 className="fs-3 mt-5 pt-5 text-white">Camile</h1>
                <p className="text-white">Member Since 2012</p>
              </div>
            </div>

            <div className="card col-md-3 col-lg-3 mt-5 mx-lg-4 mb-3" style={{...style1 , backgroundImage: `url(${img3})`}}>
              
            
              <div className="card-footer mt-3">
                <h1 className="fs-3 mt-5 pt-5 text-white">Elayne</h1>
                <p className="text-white">Member Since 2018</p>
              </div>
            </div>
            
          </div>
          <div className="row mt-3">
            <div className="col-md-10 col-lg-6 offset-lg-3 offset-md-1 text-center text-break">
            
                <h1 className="fs-2 px-3 px-md-0 ps-md-5 ms-md-2">Learn how others are reaching their audience easier than ever before.</h1>

              
                <div className="ms-md-5 mt-5 mb-5 sec_4">
                  <input type="email" name="" id="" placeholder="Enter Your E-mail"  className="rounded-3 border-light input"/>
                  <button className="button_bg_green ms-3">Join Our List</button>
                </div>
                
              
            </div>
          </div>
        </div>
  )
}

section3.propTypes = {}

export default section3